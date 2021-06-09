import { NextApiRequest, NextApiResponse } from "next";

import { SearchService } from "modules/search/search.service";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const searchService = await SearchService.build();
  const { q } = req.query;

  switch (req.method) {
    case "GET":
      const results = await searchService.searchLocations({
        query: q as string,
      });
      return res.json(results);
    default:
      return res.status(404).send("Not Found");
  }
};
