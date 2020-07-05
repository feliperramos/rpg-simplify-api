import Express from "express";

import { GroupController } from "../controllers";

const routes = Express.Router();

routes.get("/api/groups", GroupController.index);

routes.get("/api/groups/:id", GroupController.show);

routes.post("/api/groups", GroupController.store);

routes.put("/api/groups/:id", GroupController.update);

routes.delete("/api/groups/:id", GroupController.destroy);

export default routes;
