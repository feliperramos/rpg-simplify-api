import Express from "express";

import { UserEquipmentController } from "../controllers";

const routes = Express.Router();

routes.get("/api/equipments", UserEquipmentController.index);

routes.get("/api/equipments/:id", UserEquipmentController.show);

routes.post("/api/equipments", UserEquipmentController.store);

routes.put("/api/equipments/:id", UserEquipmentController.update);

routes.delete("/api/equipments/:id", UserEquipmentController.destroy);

export default routes;
