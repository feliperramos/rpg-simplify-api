import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import AuthConfig from "../config/auth.json";

export const Authentication = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: "No Token Provided" });

  const parts = authHeader.split(" ")[1];

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).json({ error: "Token malformatted" });

  let decoded = {};
  try {
    decoded = jwt.verify(token, AuthConfig.secret);
  } catch (err) {
    console.log(err);
  }

  const hasUserId = (decoded: any): decoded is jwt.JwtPayload =>
    "userId" in decoded;

  if (!hasUserId(decoded))
    return res.status(401).json({ error: "User not found" });
  else next();
};
