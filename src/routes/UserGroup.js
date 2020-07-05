import Express from "express";

import { UserGroupController } from "../controllers";

const routes = Express.Router();

routes.get("/api/usergroups", UserGroupController.index);

routes.get("/api/usergroups/:id", UserGroupController.show);

routes.post("/api/usergroups", UserGroupController.store);

routes.put("/api/usergroups/:id", UserGroupController.update);

routes.delete("/api/usergroups/:id", UserGroupController.destroy);

export default routes;
