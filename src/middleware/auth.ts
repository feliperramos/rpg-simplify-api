import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import AuthConfig from "../config/auth.json";

interface JwtPayLoad {
  _id: string;
}

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

  // need to verify the token validation to authenticate right
  const decoded = jwt.verify(token, AuthConfig.secret) as JwtPayLoad;

  jwt.verify(token, AuthConfig.secret, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Token invalid" });

    req.user.id = decoded?.id!;

    return next();
  });
};
