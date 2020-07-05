import Express from "express";

import { UserHierarchyController } from "../controllers";

const routes = Express.Router();

routes.get("/api/userhierarchy", UserHierarchyController.index);

routes.get("/api/userhierarchy/:id", UserHierarchyController.show);

routes.post("/api/userhierarchy", UserHierarchyController.store);

routes.put("/api/userhierarchy/:id", UserHierarchyController.update);

routes.delete("/api/userhierarchy/:id", UserHierarchyController.destroy);

export default routes;
