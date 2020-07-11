import { UserInventory } from "../models";

import jwt from "jsonwebtoken";

class UserInventoryController {
  async index(req, res) {
    try {
      const userInventory = await UserInventory.findAll();

      return res.json({ status: true, data: userInventory });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async show(req, res) {
    try {
      const userInventory = await UserInventory.findByPk(req.params.id);

      return res.json({ status: true, data: userInventory });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async store(req, res) {
    try {
      const userInventory = await UserInventory.create(req.body);

      return res.json({ status: true, data: userInventory });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async update(req, res) {
    try {
      const userInventory = await UserInventory.findByPk(req.params.id);

      await userInventory.update(req.body);

      return res.json({ status: true, data: userInventory });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const userInventory = await UserInventory.findByPk(req.params.id);

      await userInventory.destroy();

      return res.json({ status: true, data: userInventory });
    } catch (error) {
      return res.status(400).json({ status: false, error: error.message });
    }
  }
}

export default new UserInventoryController();
