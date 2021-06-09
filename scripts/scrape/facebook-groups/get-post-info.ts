import axios from "axios";
import * as cheerio from "cheerio";

import { headers } from "./constants/headers.constant";
import { downloadImageFromFacebook } from "./download-image-facebook";
import { getPostId } from "./utils/get-post-id.util";
import { writeFile } from "./utils/write-file.util";

const NAME_SELECTOR = "h3 > span > strong:first-child";
const DESCRIPTION_SELECTOR = "header + div";
const IMAGES_SELECTOR = "header + div + div > div img";

export async function getPostInfo(postUrl: string, debug: boolean = false) {
  const response = await axios.get(postUrl, { headers });
  const pageHtml = response.data;

  const postId = getPostId(postUrl);
  if (debug) {
    writeFile(`post-${postId}.html`, pageHtml);
  }

  const $ = cheerio.load(pageHtml);
  const recommendedBy = $(NAME_SELECTOR).text().trim();
  const description = $(DESCRIPTION_SELECTOR).text().trim();
  const imageLinks = $(IMAGES_SELECTOR)
    .map(function () {
      return "https://mbasic.facebook.com" + $(this).parent().attr("href");
    })
    .toArray();

  let imageNames = [];
  for (let i = 0; i < imageLinks.length; i++) {
    const imageName = await downloadImageFromFacebook(imageLinks[i], postId, i);
    imageNames.push(imageName);
  }

  const result = { postId, recommendedBy, description, imageNames };
  console.log(result);
  return result;
}
