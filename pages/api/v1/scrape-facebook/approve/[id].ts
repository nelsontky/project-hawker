import { NextApiRequest, NextApiResponse } from "next";

import { ScrapeFacebookService } from "modules/scrape-facebook/scrape-facebook.service";
import { runMiddleware } from "lib/utils/run-middleware.util";
import { authMiddleware } from "modules/auth/auth.middleware";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, authMiddleware);

  const facebookService = await ScrapeFacebookService.build();
  switch (req.method) {
    case "PUT":
      const post = await facebookService.approve(req.query.id as string);
      return res.json(post);
    default:
      return res.status(404).send("Not Found");
  }
};
