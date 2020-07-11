import Express from "express";

import { UserAdvantageController } from "../controllers";

const routes = Express.Router();

routes.get("/api/advantages", UserAdvantageController.index);

routes.get("/api/advantages/:id", UserAdvantageController.show);

routes.post("/api/advantages", UserAdvantageController.store);

routes.put("/api/advantages/:id", UserAdvantageController.update);

routes.delete("/api/advantages/:id", UserAdvantageController.destroy);

export default routes;
