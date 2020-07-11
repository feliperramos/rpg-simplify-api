import Express from "express";

import { UserSkillController } from "../controllers";

const routes = Express.Router();

routes.get("/api/skills", UserSkillController.index);

routes.get("/api/skills/:id", UserSkillController.show);

routes.post("/api/skills", UserSkillController.store);

routes.put("/api/skills/:id", UserSkillController.update);

routes.delete("/api/skills/:id", UserSkillController.destroy);

export default routes;
