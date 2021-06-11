import getDbConnection from "lib/utils/get-db-connection.util";
import { Connection, Repository } from "typeorm";
import sharp from "sharp";
import path from "path";

import { Image } from "modules/images/entities/image.entity";

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

  async compressImage(path: string) {
    const format = "png";
    const resizedBuffer = await sharp(path)
      .resize(undefined, 20)
      .withMetadata()
      .toFormat(format)
      .toBuffer();

    return resizedBuffer
  }

  async create(link: string) {
    const resizedBuffer = await this.compressImage(
      path.join("public", link)
    );

    const image = new Image();
    image.link = link;
    image.compressedImage = resizedBuffer;

    const result = await this.imagesRepository.save(image);
    return result;
  }
}
