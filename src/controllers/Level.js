import { Level } from "../models";

import jwt from "jsonwebtoken";

class LevelController {
  async index(req, res) {
    try {
      const level = await Level.findAll();

      return res.json({ status: true, data: level });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async show(req, res) {
    try {
      const level = await Level.findByPk(req.params.id);

      return res.json({ status: true, data: level });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async store(req, res) {
    try {
      const level = await Level.create(req.body);

      return res.json({ status: true, data: level });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async update(req, res) {
    try {
      const level = await Level.findByPk(req.params.id);

      await level.update(req.body);

      return res.json({ status: true, data: level });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const level = await Level.findByPk(req.params.id);

      await level.destroy();

      return res.json({ status: true, data: level });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }
}

export default new LevelController();
