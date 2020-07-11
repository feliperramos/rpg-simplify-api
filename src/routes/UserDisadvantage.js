import Express from "express";

import { UserDisadvantageController } from "../controllers";

const routes = Express.Router();

routes.get("/api/disadvantages", UserDisadvantageController.index);

routes.get("/api/disadvantages/:id", UserDisadvantageController.show);

routes.post("/api/disadvantages", UserDisadvantageController.store);

routes.put("/api/disadvantages/:id", UserDisadvantageController.update);

routes.delete("/api/disadvantages/:id", UserDisadvantageController.destroy);

export default routes;
