import Express from "express";

import { LevelController } from "../controllers";

const routes = Express.Router();

routes.get("/api/levels", LevelController.index);

routes.get("/api/levels/:id", LevelController.show);

routes.post("/api/levels", LevelController.store);

routes.put("/api/levels/:id", LevelController.update);

routes.delete("/api/levels/:id", LevelController.destroy);

export default routes;
