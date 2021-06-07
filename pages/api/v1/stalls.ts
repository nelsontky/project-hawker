import { NextApiRequest, NextApiResponse } from "next";

import { StallsService } from "modules/stalls/stalls.service";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const stallsService = await StallsService.build();
  const { limit, skip } = req.query;

  switch (req.method) {
    case "GET":
      const stalls = await stallsService.findAll({
        skip: typeof skip === "string" ? +skip : undefined,
        limit: typeof limit === "string" ? +limit : undefined,
      });
      return res.json(stalls);
    default:
      return res.status(404).send("Not Found");
  }
};
