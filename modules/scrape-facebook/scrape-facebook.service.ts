import { Connection, Repository, FindManyOptions } from "typeorm";
import "reflect-metadata";
import { plainToClass, plainToClassFromExist } from "class-transformer";
import { validateOrReject } from "class-validator";

import getDbConnection from "lib/utils/get-db-connection.util";
import { LocationsService } from "modules/locations/locations.service";

import { ScrapeFacebook } from "modules/scrape-facebook/entities/scrape-facebook.entity";
import { UpdateFacebookDto } from "./dto/update-facebook.dto";

export class ScrapeFacebookService {
  private connection: Connection;
  private facebookRepository: Repository<ScrapeFacebook>;
  private locationsService: LocationsService;

  constructor(
    connection: Connection,
    facebookRepository: Repository<ScrapeFacebook>,
    locationsService: LocationsService
  ) {
    this.connection = connection;
    this.facebookRepository = facebookRepository;
    this.locationsService = locationsService;
  }

  static async build() {
    const connection = await getDbConnection();
    const facebookRepository = connection.getRepository(
      "ScrapeFacebook"
    ) as Repository<ScrapeFacebook>;
    const locationsService = await LocationsService.build();

    return new ScrapeFacebookService(
      connection,
      facebookRepository,
      locationsService
    );
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
    const { locationId, ...rest } = updateFacebookDto;
    const updatedPost = plainToClassFromExist(post, rest);

    if (locationId) {
      updatedPost.location = await this.locationsService.findOne({
        where: { id: locationId },
      });
    }

    return this.facebookRepository.save(updatedPost);
  }
}
