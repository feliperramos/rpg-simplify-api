import Express from "express";

import { UserLevelController } from "../controllers";

const routes = Express.Router();

routes.get("/api/userlevel", UserLevelController.index);

routes.get("/api/userlevel/:id", UserLevelController.show);

routes.post("/api/userlevel", UserLevelController.store);

routes.put("/api/userlevel/:id", UserLevelController.update);

routes.delete("/api/userlevel/:id", UserLevelController.destroy);

export default routes;
