import getDbConnection from "lib/utils/get-db-connection.util";
import { Connection, Repository } from "typeorm";

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
    const locationsRepository = connection.getRepository(Location);
    const imagesService = await ImagesService.build();

    return new LocationsService(connection, locationsRepository, imagesService);
  }

  async findAll() {
    return this.locationsRepository
      .createQueryBuilder("location")
      .select([
        "location.name",
        "location.postalCode",
        "location.images",
        "image.link",
        "location.updatedAt",
        "location.createdAt",
      ])
      .leftJoin("location.images", "image")
      .getMany();
  }

  async create() {
    if (process.env.NODE_ENV === "development") {
      const image = await this.imagesService.create({
        link: "images/hawker-centers/ghim-moh-market-and-hawker-centre/ghim-moh-market-and-hawker-centre.jpg",
      });

      const location = new Location();
      location.name = "Ghim Moh Market and Hawker Centre";
      location.postalCode = "270020";
      location.images = [image];

      const result = await this.locationsRepository.save(location);
      return result;
    }
  }
}
