import {
  Connection,
  Repository,
  FindManyOptions,
  FindOneOptions,
} from "typeorm";
import "reflect-metadata";
import { plainToClass, plainToClassFromExist } from "class-transformer";
import { validateOrReject } from "class-validator";

import getDbConnection from "lib/utils/get-db-connection.util";
import { LocationsService } from "modules/locations/locations.service";
import { StallsService } from "modules/stalls/stalls.service";

import {
  PostStatus,
  ScrapeFacebook,
} from "modules/scrape-facebook/entities/scrape-facebook.entity";
import { UpdateFacebookDto } from "./dto/update-facebook.dto";

export class ScrapeFacebookService {
  private connection: Connection;
  private facebookRepository: Repository<ScrapeFacebook>;
  private locationsService: LocationsService;
  private stallsService: StallsService;

  constructor(
    connection: Connection,
    facebookRepository: Repository<ScrapeFacebook>,
    locationsService: LocationsService,
    stallsService: StallsService
  ) {
    this.connection = connection;
    this.facebookRepository = facebookRepository;
    this.locationsService = locationsService;
    this.stallsService = stallsService;
  }

  static async build() {
    const connection = await getDbConnection();
    const facebookRepository = connection.getRepository(
      "ScrapeFacebook"
    ) as Repository<ScrapeFacebook>;
    const locationsService = await LocationsService.build();
    const stallsService = await StallsService.build();

    return new ScrapeFacebookService(
      connection,
      facebookRepository,
      locationsService,
      stallsService
    );
  }

  async findMany(options?: FindManyOptions<ScrapeFacebook>) {
    return this.facebookRepository.find({
      ...options,
      order: { createdAt: "DESC" },
    });
  }

  async findOne(options?: FindOneOptions) {
    return this.facebookRepository.findOne(options);
  }

  async count(options?: FindManyOptions<ScrapeFacebook>) {
    return this.facebookRepository.count(options);
  }

  async update(id: string, body: any) {
    const updateFacebookDto = plainToClass(UpdateFacebookDto, body);
    await validateOrReject(updateFacebookDto);

    const post = await this.facebookRepository.findOne({
      where: { id },
      join: {
        alias: "post",
        leftJoinAndSelect: {
          stall: "post.stall",
        },
      },
    });

    if (post.stall) {
      throw new Error("Approved posts cannot be updated");
    }

    const { locationId, ...rest } = updateFacebookDto;
    const updatedPost = plainToClassFromExist(post, rest);

    if (locationId) {
      updatedPost.location = await this.locationsService.findOne({
        where: { id: locationId },
      });
    }

    return this.facebookRepository.save(updatedPost);
  }

  async approve(id: string) {
    const post = await this.findOne({
      where: { id },
      join: {
        alias: "post",
        leftJoinAndSelect: {
          location: "post.location",
          stall: "post.stall",
        },
      },
    });

    if (post.stall) {
      throw new Error("Post has already been approved before!");
    }

    const { imageNames, location, ...rest } = post;
    console.log(rest);
    const stall = await this.stallsService.create({
      ...rest,
      locationId: location.id,
      imageLinks: imageNames.map((name) => `/images/facebook/${name}`),
    });
    post.stall = stall;
    post.status = PostStatus.APPROVED;

    await this.facebookRepository.save(post);

    return stall;
  }
}
