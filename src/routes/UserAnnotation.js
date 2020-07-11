import Express from "express";

import { UserAnnotationController } from "../controllers";

const routes = Express.Router();

routes.get("/api/annotations", UserAnnotationController.index);

routes.get("/api/annotations/:id", UserAnnotationController.show);

routes.post("/api/annotations", UserAnnotationController.store);

routes.put("/api/annotations/:id", UserAnnotationController.update);

routes.delete("/api/annotations/:id", UserAnnotationController.destroy);

export default routes;
