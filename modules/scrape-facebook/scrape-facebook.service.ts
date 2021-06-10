import { Connection, Repository, FindManyOptions } from "typeorm";
import "reflect-metadata";
import { plainToClass, plainToClassFromExist } from "class-transformer";
import { validateOrReject } from "class-validator";

import getDbConnection from "lib/utils/get-db-connection.util";

import {
  ScrapeFacebook,
  PostStatus,
} from "modules/scrape-facebook/entities/scrape-facebook.entity";
import { UpdateFacebookDto } from "./dto/update-facebook.dto";

export class ScrapeFacebookService {
  private connection: Connection;
  private facebookRepository: Repository<ScrapeFacebook>;

  constructor(
    connection: Connection,
    facebookRepository: Repository<ScrapeFacebook>
  ) {
    this.connection = connection;
    this.facebookRepository = facebookRepository;
  }

  static async build() {
    const connection = await getDbConnection();
    const facebookRepository = connection.getRepository(
      "ScrapeFacebook"
    ) as Repository<ScrapeFacebook>;

    return new ScrapeFacebookService(connection, facebookRepository);
  }

  async findMany(options?: FindManyOptions<ScrapeFacebook>) {
    return this.facebookRepository.find({
      ...options,
      order: { createdAt: "DESC" },
    });
  }

  async count(options?: FindManyOptions<ScrapeFacebook>) {
    return this.facebookRepository.count(options);
  }

  async update(id: string, body: any) {
    const updateFacebookDto = plainToClass(UpdateFacebookDto, body);
    await validateOrReject(updateFacebookDto);

    const post = await this.facebookRepository.findOne(id);
    const updatedPost = plainToClassFromExist(post, { ...updateFacebookDto });
    return this.facebookRepository.save(updatedPost);
  }
}
