import { UserLevel } from "../models";

import jwt from "jsonwebtoken";

class UserLevelController {
  async index(req, res) {
    try {
      const userLevel = await UserLevel.findAll();

      return res.json({ status: true, data: userLevel });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async show(req, res) {
    try {
      const userLevel = await UserLevel.findByPk(req.params.id);

      return res.json({ status: true, data: userLevel });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async store(req, res) {
    try {
      const userLevel = await UserLevel.create(req.body);

      return res.json({ status: true, data: userLevel });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async update(req, res) {
    try {
      const userLevel = await UserLevel.findByPk(req.params.id);

      await userLevel.update(req.body);

      return res.json({ status: true, data: userLevel });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const userLevel = await UserLevel.findByPk(req.params.id);

      await userLevel.destroy();

      return res.json({ status: true, data: userLevel });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }
}

export default new UserLevelController();
