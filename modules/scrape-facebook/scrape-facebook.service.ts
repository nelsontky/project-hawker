import getDbConnection from "lib/utils/get-db-connection.util";
import { Connection, Repository, FindManyOptions } from "typeorm";

import { ScrapeFacebook } from "modules/scrape-facebook/entities/scrape-facebook.entity";

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
}
