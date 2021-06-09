import axios from "axios";
import * as cheerio from "cheerio";

import { headers } from "./constants/headers.constant";
import { writeFile } from "./utils/write-file.util";

const COMMENT_LINK_SELECTOR = "[id^=like] + span + a";
const SEE_MORE_POSTS_SELECTOR = "section + div > a";

async function getPageLinks(pageHtml: string) {
  const $ = cheerio.load(pageHtml);
  const links = $(COMMENT_LINK_SELECTOR)
    .map(function () {
      return $(this).attr("href");
    })
    .toArray();

  return links;
}

export async function getPostsLinks(
  groupUrl: string,
  numberOfPages: number,
  debug: boolean = false
) {
  let urlToScrape = groupUrl;
  let links = [];
  for (let i = 0; i < numberOfPages; i++) {
    const response = await axios.get(urlToScrape, { headers });
    const pageHtml = response.data;

    if (debug) {
      writeFile(`page-${i + 1}.html`, pageHtml);
    }

    const pageLinks = await getPageLinks(pageHtml);
    links.push(...pageLinks);

    const $ = cheerio.load(pageHtml);
    urlToScrape =
      "https://mbasic.facebook.com" + $(SEE_MORE_POSTS_SELECTOR).attr("href");
  }

  return links;
}
