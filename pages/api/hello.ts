import { NextApiRequest, NextApiResponse } from "next";

import { LocationsService } from "modules/locations/locations.service";
import { StallsService } from "modules/stalls/stalls.service";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  if (process.env.NODE_ENV === "development") {
    // const locationsService = await LocationsService.build();
    // const result = await locationsService.create();

    const stallsService = await StallsService.build();
    const result = await stallsService.create();

    res.status(200).json({ result });
  }
};
