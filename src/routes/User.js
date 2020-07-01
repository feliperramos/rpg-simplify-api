import Express from "express";
const { User } = require("../models");
import jwt from "jsonwebtoken";
import { Cipher, JWT } from "../middleware";

const routes = Express.Router();

routes.get("/api/users", async (req, res) => {
  const user = await User.findAll();

  res.json(user);
});

routes.get("/api/user", async (req, res) => {
  const user = await User.findByPk(req.query.id);

  res.json(user);
});

routes.post("/api/user", async (req, res) => {
  if (req.body) {
    let encrypt = cipher(req.body.password);

    let data = {
      email: req.body.email,
      password: encrypt.encrypted,
      key: encrypt.key,
      iv: encrypt.iv,
      name: req.body.name,
    };

    const user = await User.create(data);

    const id = user.id;

    const token = jwt.sign({ id }, process.env.SECRET);

    res.status(200).json({
      status: true,
      id: user.id,
      email: user.email,
      token: token,
    });
  }
});

export default routes;
