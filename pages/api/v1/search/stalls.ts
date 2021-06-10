import { NextApiRequest, NextApiResponse } from "next";

import { SearchService } from "modules/search/search.service";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const searchService = await SearchService.build();
  const { limit, skip, q } = req.query;

  switch (req.method) {
    case "GET":
      const results = await searchService.searchStalls({
        query: q as string,
        skip: typeof skip === "string" ? +skip : undefined,
        limit: typeof limit === "string" ? +limit : undefined,
      });
      return res.json(results);
    default:
      return res.status(404).send("Not Found");
  }
};
