import { UserAdvantage } from "../models";

import jwt from "jsonwebtoken";

class UserAdvantageController {
  async index(req, res) {
    try {
      const userAdvantage = await UserAdvantage.findAll();

      return res.json({ status: true, data: userAdvantage });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async show(req, res) {
    try {
      const userAdvantage = await UserAdvantage.findByPk(req.params.id);

      return res.json({ status: true, data: userAdvantage });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async store(req, res) {
    try {
      const userAdvantage = await UserAdvantage.create(req.body);

      return res.json({ status: true, data: userAdvantage });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async update(req, res) {
    try {
      const userAdvantage = await UserAdvantage.findByPk(req.params.id);

      await userAdvantage.update(req.body);

      return res.json({ status: true, data: userAdvantage });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const userAdvantage = await UserAdvantage.findByPk(req.params.id);

      await userAdvantage.destroy();

      return res.json({ status: true, data: userAdvantage });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }
}

export default new UserAdvantageController();
