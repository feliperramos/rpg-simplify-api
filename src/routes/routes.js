import Express from "express";
import User from "./User";

const app = Express();

app.use(User);

export default app;
