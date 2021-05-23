import { NextApiRequest, NextApiResponse } from "next";

import { LocationsService } from "modules/locations/locations.service";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const locationsService = await LocationsService.build();
  const result = await locationsService.create();

  res.status(200).json({ result });
};
