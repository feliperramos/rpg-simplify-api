import { UserGroup } from "../models";

import jwt from "jsonwebtoken";

class UserGroupController {
  async index(req, res) {
    try {
      const userGroup = await UserGroup.findAll();

      return res.json({ status: true, data: userGroup });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async show(req, res) {
    try {
      const userGroup = await UserGroup.findByPk(req.params.id);

      return res.json({ status: true, data: userGroup });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async store(req, res) {
    try {
      const userGroup = await UserGroup.create(req.body);

      return res.json({ status: true, data: userGroup });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async update(req, res) {
    try {
      const userGroup = await UserGroup.findByPk(req.params.id);

      await userGroup.update(req.body);

      return res.json({ status: true, data: userGroup });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const userGroup = await UserGroup.findByPk(req.params.id);

      await userGroup.destroy();

      return res.json({ status: true, data: userGroup });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }
}

export default new UserGroupController();
