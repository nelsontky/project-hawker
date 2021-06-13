import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validateOrReject } from "class-validator";
import getDbConnection from "lib/utils/get-db-connection.util";
import { Connection, Repository } from "typeorm";
import slugify from "slugify";

import { Stall } from "modules/stalls/entities/stall.entity";
import { CreateStallDto } from "modules/stalls/dto/create-stall.dto";
import { UpdateStallDto } from "modules/stalls/dto/update-stall.dto";
import { LocationsService } from "modules/locations/locations.service";
import { ImagesService } from "modules/images/images.service";
import { imagesToBase64 } from "lib/utils/images-to-base64";

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

  async findAll(
    options: {
      limit?: number;
      skip?: number;
      orderBy?: any[];
      noCompressedImage?: boolean;
    } = {}
  ) {
    const selectOptions = [
      "stall.id",
      "stall.name",
      "stall.stallNumber",
      "stall.information",
      "stall.slug",
      "stall.createdAt",
      "stall.updatedAt",
      "images.link",
      "location.name",
      "location.slug",
      "locationImages.link",
    ];
    if (!options.noCompressedImage) {
      selectOptions.push("images.compressedImage");
    }

    const stalls = await this.stallsRepository
      .createQueryBuilder("stall")
      .select(selectOptions)
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

    if (options.noCompressedImage) {
      return stalls;
    }
    return stalls.map((stall) => ({
      ...stall,
      images: imagesToBase64(stall.images),
    }));
  }

  async findAllByIds(ids: string[]) {
    if (ids.length === 0) {
      return [];
    }

    const stalls = await this.stallsRepository
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
        "images.compressedImage",
        "location.name",
        "location.slug",
        "locationImages.link",
      ])
      .leftJoin("stall.images", "images")
      .leftJoin("stall.location", "location")
      .leftJoin("location.images", "locationImages")
      .where("stall.id IN (:...ids)", { ids })
      .getMany();

    return stalls.map((stall) => ({
      ...stall,
      images: imagesToBase64(stall.images),
    }));
  }

  countStalls() {
    return this.stallsRepository.count();
  }

  async findOneDeep(locationSlug: string, stallSlug: string) {
    const stall = await this.stallsRepository
      .createQueryBuilder("stall")
      .select([
        "stall.name",
        "stall.stallNumber",
        "stall.information",
        "stall.createdAt",
        "stall.updatedAt",
        "images.link",
        "images.compressedImage",
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

    return { ...stall, images: imagesToBase64(stall.images) };
  }

  async findOneDeepById(id: string) {
    return this.stallsRepository
      .createQueryBuilder("stall")
      .select([
        "stall.name",
        "stall.stallNumber",
        "stall.information",
        "stall.createdAt",
        "stall.updatedAt",
        "images.link",
        "locationImages.link",
      ])
      .leftJoin("stall.images", "images")
      .leftJoinAndSelect("stall.location", "location")
      .leftJoin("location.images", "locationImages")
      .where("stall.id = :id", {
        id,
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

    const location = await this.locationsService.findOne({
      where: { id: locationId },
    });

    let images = [];
    for (const imageLink of imageLinks) {
      const image = await this.imagesService.create(imageLink);
      images.push(image);
    }

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

  async update(id: string, body: any) {
    const updateStallDto = plainToClass(UpdateStallDto, body);
    await validateOrReject(updateStallDto);

    const {
      stallName: name,
      stallNumber,
      locationId,

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
    } = updateStallDto;

    const toUpdate = await this.stallsRepository.findOne(id);
    const informationToUpdate = toUpdate.information ?? {};

    const information = {
      ...informationToUpdate,
      ...JSON.parse(
        JSON.stringify({
          deliveryAvailable,
          contact,
          foodTheyServe,
          favorites,
          dietaryRestrictions,
          priceRange,
          nameOfHawker,
          moreAboutThisHawker: description,
          openingHours,
          whatAreTheConcernsThisHawkerIsFacing,
          recommendedBy,
        })
      ),
    };

    const stall = plainToClass(Stall, {
      id,
      name,
      slug:
        name &&
        slugify(name, {
          replacement: "-",
          lower: true,
        }),
      stallNumber,
      location:
        locationId &&
        (await this.locationsService.findOne({
          where: { id: locationId },
        })),
      information,
    });

    return this.stallsRepository.save(stall);
  }
}
