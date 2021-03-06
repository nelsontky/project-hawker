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
        join: {
          alias: "post",
          leftJoinAndSelect: {
            location: "post.location",
            stall: "post.stall",
          },
        },
        where: `array_length("imageNames", 1) > 0`,
      });
      return res.json(posts);
    default:
      return res.status(404).send("Not Found");
  }
};
