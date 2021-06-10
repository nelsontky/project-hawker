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

  async compressImage(path: string, format: string) {
    const resized = await sharp(path)
      .resize(undefined, 20)
      .withMetadata()
      .toBuffer();
    const base64 = `data:image/${format};base64,${resized.toString("base64")}`;
    return base64;
  }

  async create(link: string) {
    const format = link.split(".").reverse()[0];
    const compressedBase64 = await this.compressImage(
      path.join("public", link),
      format
    );

    const image = new Image();
    image.link = link;
    image.compressedBase64 = compressedBase64;

    const result = await this.imagesRepository.save(image);
    return result;
  }
}
