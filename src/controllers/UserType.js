import { UserType } from "../models";

import jwt from "jsonwebtoken";

class UserTypeController {
  async index(req, res) {
    try {
      const userType = await UserType.findAll();

      return res.json({ status: true, data: userType });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async show(req, res) {
    try {
      const userType = await UserType.findByPk(req.params.id);

      return res.json({ status: true, data: userType });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async store(req, res) {
    try {
      const userType = await UserType.create(req.body);

      return res.json({ status: true, data: userType });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async update(req, res) {
    try {
      const userType = await UserType.findByPk(req.params.id);

      await userType.update(req.body);

      return res.json({ status: true, data: userType });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const userType = await UserType.findByPk(req.params.id);

      await userType.destroy();

      return res.json({ status: true, data: userType });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }
}

export default new UserTypeController();
