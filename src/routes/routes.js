import Express from "express";

import User from "./User";
import Auth from "./Auth";

const app = Express();

app.use(User);
app.use(Auth);

export default app;
