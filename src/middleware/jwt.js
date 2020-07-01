import jwt from "jsonwebtoken";

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token)
    return res.status(401).json({ auth: false, message: "No token provided" });

  jwt.verify(token, process.env.SECRET, (error, decoded) => {
    if (error)
      return res
        .status(500)
        .json({ auth: false, message: "Failed to authenticated" });

    req.userId = decoded.id;
    next();
  });
};

export default verifyJWT;
