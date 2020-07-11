import Express from "express";

import { UserAttributeController } from "../controllers";

const routes = Express.Router();

routes.get("/api/attributes", UserAttributeController.index);

routes.get("/api/attributes/:id", UserAttributeController.show);

routes.post("/api/attributes", UserAttributeController.store);

routes.put("/api/attributes/:id", UserAttributeController.update);

routes.delete("/api/attributes/:id", UserAttributeController.destroy);

export default routes;
