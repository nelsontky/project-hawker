import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validateOrReject } from "class-validator";
import getDbConnection from "lib/utils/get-db-connection.util";
import { Connection, Repository } from "typeorm";
import slugify from "slugify";

import { Stall } from "modules/stalls/entities/stall.entity";
import { CreateStallDto } from "./dto/create-stall.dto";
import { LocationsService } from "modules/locations/locations.service";
import { ImagesService } from "modules/images/images.service";

export class StallsService {
  private connection: Connection;
  private stallsRepository: Repository<Stall>;
  private locationsService: LocationsService;
  private imagesService: ImagesService;

  constructor(
    connection: Connection,
    stallsRepository: Repository<Stall>,
    locationsService: LocationsService,
    imagesService: ImagesService
  ) {
    this.connection = connection;
    this.stallsRepository = stallsRepository;
    this.locationsService = locationsService;
    this.imagesService = imagesService;
  }

  static async build() {
    const connection = await getDbConnection();
    const stallsRepository = connection.getRepository(
      "Stall"
    ) as Repository<Stall>;
    const locationsService = await LocationsService.build();
    const imagesService = await ImagesService.build();

    return new StallsService(
      connection,
      stallsRepository,
      locationsService,
      imagesService
    );
  }

  findAllSlugs(locationSlug: string) {
    return this.stallsRepository
      .createQueryBuilder("stall")
      .select(["stall.slug"])
      .leftJoin("stall.location", "location")
      .where("location.slug = :locationSlug", { locationSlug })
      .getMany();
  }

  findAll(options: { limit?: number; skip?: number; orderBy?: any[] } = {}) {
    return this.stallsRepository
      .createQueryBuilder("stall")
      .select([
        "stall.id",
        "stall.name",
        "stall.stallNumber",
        "stall.information",
        "stall.slug",
        "stall.createdAt",
        "stall.updatedAt",
        "images.link",
        "images.compressedBase64",
        "location.name",
        "location.slug",
        "locationImages.link",
      ])
      .leftJoin("stall.images", "images")
      .leftJoin("stall.location", "location")
      .leftJoin("location.images", "locationImages")
      .orderBy(
        options.orderBy ? options.orderBy[0] : "stall.name",
        options.orderBy ? options.orderBy[1] : "ASC"
      )
      .skip(options.skip)
      .take(options.limit)
      .getMany();
  }

  findAllByIds(ids: string[]) {
    if (ids.length === 0) {
      return [];
    }

    return this.stallsRepository
      .createQueryBuilder("stall")
      .select([
        "stall.id",
        "stall.name",
        "stall.stallNumber",
        "stall.information",
        "stall.slug",
        "stall.createdAt",
        "stall.updatedAt",
        "images.link",
        "images.compressedBase64",
        "location.name",
        "location.slug",
        "locationImages.link",
      ])
      .leftJoin("stall.images", "images")
      .leftJoin("stall.location", "location")
      .leftJoin("location.images", "locationImages")
      .where("stall.id IN (:...ids)", { ids })
      .getMany();
  }

  countStalls() {
    return this.stallsRepository.count();
  }

  findOneDeep(locationSlug: string, stallSlug: string) {
    return this.stallsRepository
      .createQueryBuilder("stall")
      .select([
        "stall.name",
        "stall.stallNumber",
        "stall.information",
        "stall.createdAt",
        "stall.updatedAt",
        "images.link",
        "images.compressedBase64",
        "locationImages.link",
      ])
      .leftJoin("stall.images", "images")
      .leftJoinAndSelect("stall.location", "location")
      .leftJoin("location.images", "locationImages")
      .where("location.slug = :locationSlug AND stall.slug = :stallSlug", {
        locationSlug,
        stallSlug,
      })
      .getOne();
  }

  async create(body: any) {
    const createStallDto = plainToClass(CreateStallDto, body);
    await validateOrReject(createStallDto);

    const {
      stallName: name,
      stallNumber,
      locationId,
      imageLinks,

      // Information JSON
      nameOfHawker,
      description,
      recommendedBy,
      contact,
      deliveryAvailable,
      dietaryRestrictions,
      favorites,
      foodTheyServe,
      openingHours,
      priceRange,
      whatAreTheConcernsThisHawkerIsFacing,
    } = createStallDto;

    let images = [];
    for (const imageLink of imageLinks) {
      const image = await this.imagesService.create(imageLink);
      images.push(image);
    }

    const location = await this.locationsService.findOne({
      where: { id: locationId },
    });
    const stall = plainToClass(Stall, {
      name,
      slug: slugify(name, {
        replacement: "-",
        lower: true,
      }),
      stallNumber,
      location,
      images,
      information: {
        deliveryAvailable,
        contact,
        foodTheyServe,
        favorites,
        dietaryRestrictions,
        priceRange,
        nameOfHawker,
        description,
        openingHours,
        whatAreTheConcernsThisHawkerIsFacing,
        recommendedBy,
      },
    });

    return this.stallsRepository.save(stall);
  }
}
