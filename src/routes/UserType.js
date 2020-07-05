import Express from "express";

import { UserTypeController } from "../controllers";

const routes = Express.Router();

routes.get("/api/usertype", UserTypeController.index);

routes.get("/api/usertype/:id", UserTypeController.show);

routes.post("/api/usertype", UserTypeController.store);

routes.put("/api/usertype/:id", UserTypeController.update);

routes.delete("/api/usertype/:id", UserTypeController.destroy);

export default routes;
