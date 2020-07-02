import { User } from "../models";

import jwt from "jsonwebtoken";
import { Cipher, JWT } from "../middleware";

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      console.log(req.body);
      let encrypt = Cipher(req.body.password);

      let data = {
        email: req.body.email,
        password: encrypt.encrypted,
        key: encrypt.key,
        iv: encrypt.iv,
        name: req.body.name,
      };

      const user = User.create(data);

      const id = user.id;

      const token = jwt.sign({ id }, process.env.SECRET);

      return res.json({
        status: true,
        id: user.id,
        email: user.email,
        token: token,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      await user.update(req.body);

      return res.json({ user });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      await user.destroy();

      return res.json({ user });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new UserController();
