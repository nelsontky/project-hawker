import getDbConnection from "lib/utils/get-db-connection.util";
import { Connection, Repository } from "typeorm";
import sharp from "sharp";

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

  async compress() {
    if (process.env.NODE_ENV === "development") {
      const images = await this.imagesRepository.find();

      for (const image of images) {
        const resized = await sharp("public" + image.link)
          .resize(undefined, 20)
          .withMetadata()
          .toBuffer();
        const base64 = `data:image/png;base64,${resized.toString("base64")}`;
        image.compressedBase64 = base64;
        await this.imagesRepository.save(image);
      }

      return true;
    }
  }
}
