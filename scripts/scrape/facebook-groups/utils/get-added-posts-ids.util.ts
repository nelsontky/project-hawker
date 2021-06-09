import { Repository } from "typeorm";

import getDbConnection from "lib/utils/get-db-connection.util";
import { ScrapeFacebook } from "modules/scrape-facebook/entities/scrape-facebook.entity";

export async function getAddedPostsIds() {
  const connection = await getDbConnection();
  const scrapedRepository = connection.getRepository(
    "ScrapeFacebook"
  ) as Repository<ScrapeFacebook>;

  return scrapedRepository.find({ select: ["id"] });
}
