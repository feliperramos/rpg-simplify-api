import { UserInfo } from "../models";

import jwt from "jsonwebtoken";

class UserInfoController {
  async index(req, res) {
    try {
      const userInfo = await UserInfo.findAll();

      return res.json({ status: true, data: userInfo });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async show(req, res) {
    try {
      const userInfo = await UserInfo.findByPk(req.params.id);

      return res.json({ status: true, data: userInfo });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async store(req, res) {
    try {
      const userInfo = await UserInfo.create(req.body);

      return res.json({ status: true, data: userInfo });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async update(req, res) {
    try {
      const userInfo = await UserInfo.findByPk(req.params.id);

      await userInfo.update(req.body);

      return res.json({ status: true, data: userInfo });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const userInfo = await UserInfo.findByPk(req.params.id);

      await userInfo.destroy();

      return res.json({ status: true, data: userInfo });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }
}

export default new UserInfoController();
