import getDbConnection from "lib/utils/get-db-connection.util";
import { ScrapeFacebook } from "modules/scrape-facebook/entities/scrape-facebook.entity";
import { Repository } from "typeorm";

export async function addPostToDatabase({
  postId,
  recommendedBy,
  description,
  imageNames,
  postUrl,
}: {
  postId: string;
  recommendedBy: string;
  description: string;
  imageNames: string[];
  postUrl: string;
}) {
  const connection = await getDbConnection();
  const scrapedRepository = connection.getRepository(
    "ScrapeFacebook"
  ) as Repository<ScrapeFacebook>;

  const newPost = new ScrapeFacebook();
  newPost.id = postId;
  newPost.recommendedBy = recommendedBy;
  newPost.moreAboutThisHawker = description;
  newPost.imageNames = imageNames;
  newPost.postUrl = postUrl;

  await scrapedRepository.save(newPost);
}
