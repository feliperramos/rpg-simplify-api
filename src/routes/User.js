import Express from "express";

import UserController from "../controllers/User";

const routes = Express.Router();

routes.get("/api/users", UserController.index);

routes.get("/api/users/:id", UserController.show);

routes.post("/api/users", UserController.store);

routes.put("/api/users/:id", UserController.update);

routes.delete("/api/users/:id", UserController.destroy);

export default routes;
