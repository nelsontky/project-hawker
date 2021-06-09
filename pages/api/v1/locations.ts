import { NextApiRequest, NextApiResponse } from "next";

import { LocationsService } from "modules/locations/locations.service";
import { runMiddleware } from "lib/utils/run-middleware.util";
import { authMiddleware } from "modules/auth/auth.middleware";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, authMiddleware);

  const locationsService = await LocationsService.build();
  switch (req.method) {
    case "POST":
      const location = await locationsService.create(req.body);
      return res.json(location);
    default:
      return res.status(404).send("Not Found");
  }
};
