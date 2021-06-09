import { NextApiRequest, NextApiResponse } from "next";

import { ScrapeFacebookService } from "modules/scrape-facebook/scrape-facebook.service";
import { runMiddleware } from "lib/utils/run-middleware.util";
import { authMiddleware } from "modules/auth/auth.middleware";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, authMiddleware);

  const facebookService = await ScrapeFacebookService.build();
  switch (req.method) {
    case "GET":
      const { limit, skip } = req.query;
      const posts = await facebookService.findMany({
        skip: typeof skip === "string" ? +skip : undefined,
        take: typeof limit === "string" ? +limit : undefined,
      });
      return res.json(posts);
    default:
      return res.status(404).send("Not Found");
  }
};
