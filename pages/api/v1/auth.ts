import { NextApiRequest, NextApiResponse } from "next";

import { runMiddleware } from "lib/utils/run-middleware.util";
import { authMiddleware } from "modules/auth/auth.middleware";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, authMiddleware);
  switch (req.method) {
    case "POST":
      return res.json({ success: true });
    default:
      return res.status(404).send("Not Found");
  }
};
