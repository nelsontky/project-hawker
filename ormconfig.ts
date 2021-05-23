import * as dotenv from "dotenv";
import * as fs from "fs";
const data: any = dotenv.parse(fs.readFileSync(".env"));

import { ConnectionOptions } from "typeorm";

import { Image } from "modules/images/entities/image.entity";
import { Stall } from "modules/stalls/entities/stall.entity";
import { Location } from "modules/locations/entities/location.entity";

const config: ConnectionOptions = {
  type: "postgres",
  host: data.POSTGRES_HOST,
  port: +data.POSTGRES_PORT,
  username: data.POSTGRES_USER,
  password: data.POSTGRES_PASSWORD,
  database: data.POSTGRES_USER,
  entities: [Image, Stall, Location],
  synchronize: true,
  migrations: [__dirname + "/migrations/**/*{.ts,.js}"],
  cli: {
    // Location of migration should be inside src folder
    // to be compiled into dist/ folder.
    migrationsDir: "migrations",
  },
};

export default config;
