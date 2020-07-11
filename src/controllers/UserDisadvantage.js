import { UsersDisadvantage } from "../models";

import jwt from "jsonwebtoken";

class UserDisadvantageController {
  async index(req, res) {
    try {
      const userDisadvantage = await UsersDisadvantage.findAll();

      return res.json({ status: true, data: userDisadvantage });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async show(req, res) {
    try {
      const userDisadvantage = await UsersDisadvantage.findByPk(req.params.id);

      return res.json({ status: true, data: userDisadvantage });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async store(req, res) {
    try {
      const userDisadvantage = await UsersDisadvantage.create(req.body);

      return res.json({ status: true, data: userDisadvantage });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async update(req, res) {
    try {
      const userDisadvantage = await UsersDisadvantage.findByPk(req.params.id);

      await userDisadvantage.update(req.body);

      return res.json({ status: true, data: userDisadvantage });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const userDisadvantage = await UsersDisadvantage.findByPk(req.params.id);

      await userDisadvantage.destroy();

      return res.json({ status: true, data: userDisadvantage });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }
}

export default new UserDisadvantageController();
