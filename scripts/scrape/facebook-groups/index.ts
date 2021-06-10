// To run: 
// npx ts-node -r tsconfig-paths/register --project tsconfig.json scripts/scrape/facebook-groups/index.ts

import { getPostsLinks } from "./get-posts-links";
import { getPostInfo } from "./get-post-info";
import { addPostToDatabase } from "./utils/add-post-to-database.util";
import { getAddedPostsIds } from "./utils/get-added-posts-ids.util";
import { getPostId } from "./utils/get-post-id.util";

const FACEBOOK_GROUP_LINK =
  "https://mbasic.facebook.com/groups/2773435079585801";

const NUMBER_OF_PAGES_TO_SCRAPE = 30;

(async () => {
  const addedIds = (await getAddedPostsIds()).map((post) => post.id);
  const allLinks = await getPostsLinks(
    FACEBOOK_GROUP_LINK,
    NUMBER_OF_PAGES_TO_SCRAPE
  );

  // Remove posts that have been added before
  const links = allLinks.filter((link) => {
    const linkPostId = getPostId(link);
    return !addedIds.includes(linkPostId);
  });

  console.log(`${allLinks.length - links.length} duplicates removed!`)

  for (const link of links) {
    try {
      const postInfo = await getPostInfo(link);
      await addPostToDatabase(postInfo);
    } catch (e) {
      console.log(e.message);
      console.log(e.stack);
    }
  }
})();
