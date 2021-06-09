import axios from "axios";
import * as cheerio from "cheerio";

import { headers } from "./constants/headers.constant";
import { downloadImage } from "./utils/download-image.util";

const IMG_SELECTOR = "div > img";

export async function downloadImageFromFacebook(
  facebookImagePage: string,
  postId: string,
  index: number
) {
  const response = await axios.get(facebookImagePage, { headers });
  const pageHtml = response.data;

  const $ = cheerio.load(pageHtml);
  const imageLink = $(IMG_SELECTOR).attr("src");

  const fileName = `${postId}.${index}.jpg`;
  await downloadImage(fileName, imageLink);

  return fileName;
}
