import Express from "express";

const app = Express();

app.use(require("./User"));

export default app;
