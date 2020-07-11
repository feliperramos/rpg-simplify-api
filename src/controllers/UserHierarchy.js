import { UsersHierarchy } from "../models";

import jwt from "jsonwebtoken";

class UserHierarchyController {
  async index(req, res) {
    try {
      const userHierarchy = await UsersHierarchy.findAll();

      return res.json({ status: true, data: userHierarchy });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async show(req, res) {
    try {
      const userHierarchy = await UsersHierarchy.findByPk(req.params.id);

      return res.json({ status: true, data: userHierarchy });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async store(req, res) {
    try {
      const userHierarchy = await UsersHierarchy.create(req.body);

      return res.json({ status: true, data: userHierarchy });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async update(req, res) {
    try {
      const userHierarchy = await UsersHierarchy.findByPk(req.params.id);

      await userHierarchy.update(req.body);

      return res.json({ status: true, data: userHierarchy });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const userHierarchy = await UsersHierarchy.findByPk(req.params.id);

      await userHierarchy.destroy();

      return res.json({ status: true, data: userHierarchy });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }
}

export default new UserHierarchyController();
