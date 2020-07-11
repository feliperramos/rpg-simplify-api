import { UserAnnotation } from "../models";

import jwt from "jsonwebtoken";

class UserAnnotationController {
  async index(req, res) {
    try {
      const userAnnotation = await UserAnnotation.findAll();

      return res.json({ status: true, data: userAnnotation });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async show(req, res) {
    try {
      const userAnnotation = await UserAnnotation.findByPk(req.params.id);

      return res.json({ status: true, data: userAnnotation });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async store(req, res) {
    try {
      const userAnnotation = await UserAnnotation.create(req.body);

      return res.json({ status: true, data: userAnnotation });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async update(req, res) {
    try {
      const userAnnotation = await UserAnnotation.findByPk(req.params.id);

      await userAnnotation.update(req.body);

      return res.json({ status: true, data: userAnnotation });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const userAnnotation = await UserAnnotation.findByPk(req.params.id);

      await userAnnotation.destroy();

      return res.json({ status: true, data: userAnnotation });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }
}

export default new UserAnnotationController();
