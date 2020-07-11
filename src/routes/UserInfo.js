import Express from "express";

import { UserInfoController } from "../controllers";

const routes = Express.Router();

routes.get("/api/informations", UserInfoController.index);

routes.get("/api/informations/:id", UserInfoController.show);

routes.post("/api/informations", UserInfoController.store);

routes.put("/api/informations/:id", UserInfoController.update);

routes.delete("/api/informations/:id", UserInfoController.destroy);

export default routes;
