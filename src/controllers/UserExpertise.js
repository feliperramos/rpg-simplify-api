import { UserExpertise } from "../models";

import jwt from "jsonwebtoken";

class UserExpertiseController {
  async index(req, res) {
    try {
      const userExpertise = await UserExpertise.findAll();

      return res.json({ status: true, data: userExpertise });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async show(req, res) {
    try {
      const userExpertise = await UserExpertise.findByPk(req.params.id);

      return res.json({ status: true, data: userExpertise });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async store(req, res) {
    try {
      const userExpertise = await UserExpertise.create(req.body);

      return res.json({ status: true, data: userExpertise });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async update(req, res) {
    try {
      const userExpertise = await UserExpertise.findByPk(req.params.id);

      await userExpertise.update(req.body);

      return res.json({ status: true, data: userExpertise });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const userExpertise = await UserExpertise.findByPk(req.params.id);

      await userExpertise.destroy();

      return res.json({ status: true, data: userExpertise });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }
}

export default new UserExpertiseController();
