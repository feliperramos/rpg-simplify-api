import { User } from "../models";

import jwt from "jsonwebtoken";
import { JWT, Decipher } from "../middleware";

class AuthController {
  async store(req, res) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      const encrypt = { encrypted: user.password, iv: user.iv, key: user.key };
      console.log(encrypt);

      const decrypted = Decipher(encrypt);

      if (decrypted === req.body.password) {
        const id = user.id;

        if (user === null)
          res.send({
            status: false,
            message: "User email or password is invalid!",
          });
        else {
          const token = jwt.sign({ id }, process.env.SECRET);

          res.json({ user: user.email, token: token });
        }
      }
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new AuthController();
