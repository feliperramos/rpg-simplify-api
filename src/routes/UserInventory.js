import Express from "express";

import { UserInventoryController } from "../controllers";

const routes = Express.Router();

routes.get("/api/inventory", UserInventoryController.index);

routes.get("/api/inventory/:id", UserInventoryController.show);

routes.post("/api/inventory", UserInventoryController.store);

routes.put("/api/inventory/:id", UserInventoryController.update);

routes.delete("/api/inventory/:id", UserInventoryController.destroy);

export default routes;
