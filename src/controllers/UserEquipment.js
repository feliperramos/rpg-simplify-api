import { UserEquipment } from "../models";

import jwt from "jsonwebtoken";

class UserEquipmentController {
  async index(req, res) {
    try {
      const userEquipment = await UserEquipment.findAll();

      return res.json({ status: true, data: userEquipment });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async show(req, res) {
    try {
      const userEquipment = await UserEquipment.findByPk(req.params.id);

      return res.json({ status: true, data: userEquipment });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async store(req, res) {
    try {
      const userEquipment = await UserEquipment.create(req.body);

      return res.json({ status: true, data: userEquipment });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async update(req, res) {
    try {
      const userEquipment = await UserEquipment.findByPk(req.params.id);

      await userEquipment.update(req.body);

      return res.json({ status: true, data: userEquipment });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const userEquipment = await UserEquipment.findByPk(req.params.id);

      await userEquipment.destroy();

      return res.json({ status: true, data: userEquipment });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }
}

export default new UserEquipmentController();
