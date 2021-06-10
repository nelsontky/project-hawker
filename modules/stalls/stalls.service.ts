import getDbConnection from "lib/utils/get-db-connection.util";
import { Connection, Repository } from "typeorm";

import { Stall } from "modules/stalls/entities/stall.entity";

export class StallsService {
  private connection: Connection;
  private stallsRepository: Repository<Stall>;

  constructor(connection: Connection, stallsRepository: Repository<Stall>) {
    this.connection = connection;
    this.stallsRepository = stallsRepository;
  }

  static async build() {
    const connection = await getDbConnection();
    const stallsRepository = connection.getRepository(Stall);

    return new StallsService(connection, stallsRepository);
  }

  findAllSlugs(locationSlug: string) {
    return this.stallsRepository
      .createQueryBuilder("stall")
      .select(["stall.slug"])
      .leftJoin("stall.location", "location")
      .where("location.slug = :locationSlug", { locationSlug })
      .getMany();
  }

  findAll(options: { limit?: number; skip?: number; orderBy?: any[] } = {}) {
    return this.stallsRepository
      .createQueryBuilder("stall")
      .select([
        "stall.id",
        "stall.name",
        "stall.stallNumber",
        "stall.information",
        "stall.slug",
        "stall.createdAt",
        "stall.updatedAt",
        "images.link",
        "images.compressedBase64",
        "location.name",
        "location.slug",
        "locationImages.link",
      ])
      .leftJoin("stall.images", "images")
      .leftJoin("stall.location", "location")
      .leftJoin("location.images", "locationImages")
      .orderBy(
        options.orderBy ? options.orderBy[0] : "stall.name",
        options.orderBy ? options.orderBy[1] : "ASC"
      )
      .skip(options.skip)
      .take(options.limit)
      .getMany();
  }

  findAllByIds(ids: string[]) {
    if (ids.length === 0) {
      return [];
    }

    return this.stallsRepository
      .createQueryBuilder("stall")
      .select([
        "stall.id",
        "stall.name",
        "stall.stallNumber",
        "stall.information",
        "stall.slug",
        "stall.createdAt",
        "stall.updatedAt",
        "images.link",
        "images.compressedBase64",
        "location.name",
        "location.slug",
        "locationImages.link",
      ])
      .leftJoin("stall.images", "images")
      .leftJoin("stall.location", "location")
      .leftJoin("location.images", "locationImages")
      .where("stall.id IN (:...ids)", { ids })
      .getMany();
  }

  countStalls() {
    return this.stallsRepository.count();
  }

  findOneDeep(locationSlug: string, stallSlug: string) {
    return this.stallsRepository
      .createQueryBuilder("stall")
      .select([
        "stall.name",
        "stall.stallNumber",
        "stall.information",
        "stall.createdAt",
        "stall.updatedAt",
        "images.link",
        "images.compressedBase64",
        "locationImages.link",
      ])
      .leftJoin("stall.images", "images")
      .leftJoinAndSelect("stall.location", "location")
      .leftJoin("location.images", "locationImages")
      .where("location.slug = :locationSlug AND stall.slug = :stallSlug", {
        locationSlug,
        stallSlug,
      })
      .getOne();
  }
}
