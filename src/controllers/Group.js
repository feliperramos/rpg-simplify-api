import { Group } from "../models";

import jwt from "jsonwebtoken";

class GroupController {
  async index(req, res) {
    try {
      const group = await Group.findAll();

      return res.json({ status: true, data: group });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async show(req, res) {
    try {
      const group = await Group.findByPk(req.params.id);

      return res.json({ status: true, data: group });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async store(req, res) {
    try {
      const group = await Group.create(req.body);

      return res.json({ status: true, data: group });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async update(req, res) {
    try {
      const group = await Group.findByPk(req.params.id);

      await group.update(req.body);

      return res.json({ status: true, data: group });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const group = await Group.findByPk(req.params.id);

      await group.destroy();

      return res.json({ status: true, data: group });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }
}

export default new GroupController();
