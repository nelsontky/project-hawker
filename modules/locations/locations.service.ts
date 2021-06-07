import getDbConnection from "lib/utils/get-db-connection.util";
import { Connection, FindOneOptions, Repository } from "typeorm";

import { Location } from "modules/locations/entities/location.entity";

export class LocationsService {
  private connection: Connection;
  private locationsRepository: Repository<Location>;

  constructor(
    connection: Connection,
    locationsRepository: Repository<Location>,
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
    return this.locationsRepository
      .createQueryBuilder("location")
      .select([
        "location.id",
        "location.name",
        "location.postalCode",
        "images.link",
        "images.compressedBase64",
        "location.slug",
        "location.updatedAt",
        "location.createdAt",
      ])
      .leftJoin("location.images", "images")
      .getMany();
  }

  async findOne(options: FindOneOptions<Location>) {
    return this.locationsRepository.findOne(options);
  }

  async findOneDeep(locationSlug: string) {
    return this.locationsRepository
      .createQueryBuilder("location")
      .select([
        "location.name",
        "location.postalCode",
        "images.link",
        "images.compressedBase64",
        "location.slug",
        "stallImages.link",
        "stallImages.compressedBase64",
        "location.updatedAt",
        "location.createdAt",
      ])
      .leftJoin("location.images", "images")
      .leftJoinAndSelect("location.stalls", "stalls")
      .orderBy("stalls.name", "ASC")
      .leftJoin("stalls.images", "stallImages")
      .where("location.slug = :locationSlug", { locationSlug })
      .getOne();
  }
}
