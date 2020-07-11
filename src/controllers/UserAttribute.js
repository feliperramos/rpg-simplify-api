import { UserAttribute } from "../models";

import jwt from "jsonwebtoken";

class UserAttributeController {
  async index(req, res) {
    try {
      const userAttribute = await UserAttribute.findAll();

      return res.json({ status: true, data: userAttribute });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async show(req, res) {
    try {
      const userAttribute = await UserAttribute.findByPk(req.params.id);

      return res.json({ status: true, data: userAttribute });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async store(req, res) {
    try {
      const userAttribute = await UserAttribute.create(req.body);

      return res.json({ status: true, data: userAttribute });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async update(req, res) {
    try {
      const userAttribute = await UserAttribute.findByPk(req.params.id);

      await userAttribute.update(req.body);

      return res.json({ status: true, data: userAttribute });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const userAttribute = await UserAttribute.findByPk(req.params.id);

      await userAttribute.destroy();

      return res.json({ status: true, data: userAttribute });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }
}

export default new UserAttributeController();
