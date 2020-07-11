import { UserSkill } from "../models";

import jwt from "jsonwebtoken";

class UserSkillController {
  async index(req, res) {
    try {
      const userSkill = await UserSkill.findAll();

      return res.json({ status: true, data: userLevel });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async show(req, res) {
    try {
      const userSkill = await UserSkill.findByPk(req.params.id);

      return res.json({ status: true, data: userSkill });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async store(req, res) {
    try {
      const userSkill = await UserSkill.create(req.body);

      return res.json({ status: true, data: userSkill });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async update(req, res) {
    try {
      const userSkill = await UserSkill.findByPk(req.params.id);

      await userSkill.update(req.body);

      return res.json({ status: true, data: userSkill });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const userSkill = await UserSkill.findByPk(req.params.id);

      await userSkill.destroy();

      return res.json({ status: true, data: userSkill });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }
}

export default new UserSkillController();
