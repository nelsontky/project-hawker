import { NextApiRequest, NextApiResponse } from "next";

export function authMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function
) {
  const token = req.headers["admin-token"];
  const isTokenCorrect = token === process.env.ADMIN_PASSCODE;

  next(isTokenCorrect || new Error("Wrong toekn provided"));
}
