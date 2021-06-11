import "reflect-metadata";
import { plainToClass } from "class-transformer";
import getDbConnection from "lib/utils/get-db-connection.util";
import { Connection, FindOneOptions, Repository } from "typeorm";
import { validateOrReject } from "class-validator";
import slugify from "slugify";
import axios from "axios";

import { Location } from "modules/locations/entities/location.entity";
import { CreateLocationDto } from "modules/locations/dto/create-location.dto";
import { imagesToBase64 } from "lib/utils/images-to-base64";

export class LocationsService {
  private connection: Connection;
  private locationsRepository: Repository<Location>;

  constructor(
    connection: Connection,
    locationsRepository: Repository<Location>
  ) {
    this.connection = connection;
    this.locationsRepository = locationsRepository;
  }

  static async build() {
    const connection = await getDbConnection();
    const locationsRepository = connection.getRepository(
      "Location"
    ) as Repository<Location>;

    return new LocationsService(connection, locationsRepository);
  }

  async findAll() {
    const locations = await this.locationsRepository
      .createQueryBuilder("location")
      .select([
        "location.id",
        "location.name",
        "location.postalCode",
        "images.link",
        "images.compressedImage",
        "location.slug",
        "location.updatedAt",
        "location.createdAt",
      ])
      .leftJoin("location.images", "images")
      .getMany();

    return locations.map((location) => ({
      ...location,
      images: imagesToBase64(location.images),
    }));
  }

  async findAllByIds(ids: string[]) {
    if (ids.length === 0) {
      return [];
    }

    return this.locationsRepository
      .createQueryBuilder("location")
      .select([
        "location.id",
        "location.name",
        "location.postalCode",
        "location.slug",
      ])
      .where("location.id IN (:...ids)", { ids })
      .getMany();
  }

  async findOne(options: FindOneOptions<Location>) {
    return this.locationsRepository.findOne(options);
  }

  async findOneDeep(locationSlug: string) {
    const location = await this.locationsRepository
      .createQueryBuilder("location")
      .select([
        "location.name",
        "location.postalCode",
        "images.link",
        "images.compressedImage",
        "location.slug",
        "stallImages.link",
        "stallImages.compressedImage",
        "location.updatedAt",
        "location.createdAt",
      ])
      .leftJoin("location.images", "images")
      .leftJoinAndSelect("location.stalls", "stalls")
      .orderBy("stalls.name", "ASC")
      .leftJoin("stalls.images", "stallImages")
      .where("location.slug = :locationSlug", { locationSlug })
      .getOne();

    return { ...location, images: imagesToBase64(location.images) };
  }

  async createLocationsDoc(location: Location) {
    const response = await axios.post(
      `http://es:9200/locations/_doc/${location.id}`,
      {
        id: location.id,
        name: location.name,
        region: location.region,
        postalCode: location.postalCode,
        createdAt: location.createdAt,
        updatedAt: location.updatedAt,
      }
    );

    return response.data;
  }

  async create(body: any) {
    const createLocationDto = plainToClass(CreateLocationDto, body);
    await validateOrReject(createLocationDto);

    const { name } = createLocationDto;
    const location = plainToClass(Location, {
      ...createLocationDto,
      slug: slugify(name, {
        replacement: "-",
        lower: true,
      }),
    });

    return this.connection.transaction(async (manager) => {
      const result = await manager.save(location);
      await this.createLocationsDoc(result);
      return result;
    });
  }
}
