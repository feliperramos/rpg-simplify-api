import Express from "express";

import { UserExpertiseController } from "../controllers";

const routes = Express.Router();

routes.get("/api/expertises", UserExpertiseController.index);

routes.get("/api/expertises/:id", UserExpertiseController.show);

routes.post("/api/expertises", UserExpertiseController.store);

routes.put("/api/expertises/:id", UserExpertiseController.update);

routes.delete("/api/expertises/:id", UserExpertiseController.destroy);

export default routes;
