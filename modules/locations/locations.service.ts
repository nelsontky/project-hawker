import getDbConnection from "lib/utils/get-db-connection.util";
import { Connection, FindOneOptions, Repository } from "typeorm";

import { ImagesService } from "modules/images/image.service";
import { Location } from "modules/locations/entities/location.entity";

export class LocationsService {
  private connection: Connection;
  private locationsRepository: Repository<Location>;
  private imagesService: ImagesService;

  constructor(
    connection: Connection,
    locationsRepository: Repository<Location>,
    imagesService: ImagesService
  ) {
    this.connection = connection;
    this.locationsRepository = locationsRepository;
    this.imagesService = imagesService;
  }

  static async build() {
    const connection = await getDbConnection();
    const locationsRepository = connection.getRepository(
      "Location"
    ) as Repository<Location>;
    const imagesService = await ImagesService.build();

    return new LocationsService(connection, locationsRepository, imagesService);
  }

  async findAll() {
    return this.locationsRepository
      .createQueryBuilder("location")
      .select([
        "location.id",
        "location.name",
        "location.postalCode",
        "images.link",
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
        "location.slug",
        "stallImages.link",
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

  async create() {
    if (process.env.NODE_ENV === "development") {
      for (let i = 270020; i < 270021; i++) {
        const image = await this.imagesService.create({
          link: "images/hawker-centers/ghim-moh-market-and-hawker-centre/ghim-moh-market-and-hawker-centre.jpg",
        });

        const location = new Location();
        location.name = "Ghim Moh Market and Hawker Centre";
        location.slug = "ghim-moh-market-and-hawker-center";
        location.postalCode = "" + i;
        location.images = [image];

        await this.locationsRepository.save(location);
      }
    }
  }
}
