import Express from "express";

import { AuthController } from "../controllers";

const routes = Express.Router();

routes.post("/api/auth", AuthController.store);

export default routes;
