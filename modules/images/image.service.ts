import getDbConnection from "lib/utils/get-db-connection.util";
import { Connection, Repository } from "typeorm";

import { Image } from "modules/images/entities/image.entity";
import { CreateImageDto } from "modules/images/dto/create-image.dto";

export class ImagesService {
  private connection: Connection;
  private imagesRepository: Repository<Image>;

  constructor(connection: Connection, imagesRepository: Repository<Image>) {
    this.connection = connection;
    this.imagesRepository = imagesRepository;
  }

  static async build() {
    const connection = await getDbConnection();
    const imagesRepository = connection.getRepository(
      "Image"
    ) as Repository<Image>;

    return new ImagesService(connection, imagesRepository);
  }

  async create(createImageDto: CreateImageDto) {
    if (process.env.NODE_ENV === "development") {
      const image = new Image();
      image.link = createImageDto.link;

      const result = await this.imagesRepository.save(image);
      return result;
    }
  }
}
