import { NextApiRequest, NextApiResponse } from "next";

import { StallsService } from "modules/stalls/stalls.service";
import { runMiddleware } from "lib/utils/run-middleware.util";
import { authMiddleware } from "modules/auth/auth.middleware";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const stallsService = await StallsService.build();
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const stall = await stallsService.findOneDeepById(id as string);
      return res.json(stall);

    case "PUT":
      await runMiddleware(req, res, authMiddleware);
      const updatedStall = await stallsService.update(id as string, req.body);
      return res.json(updatedStall);
      
    default:
      return res.status(404).send("Not Found");
  }
};
