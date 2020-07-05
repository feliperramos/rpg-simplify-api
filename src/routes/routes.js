import Express from "express";

import User from "./User";
import Auth from "./Auth";
import Group from "./Group";
import UserGroup from "./UserGroup";
import UserHierarchy from "./UserHierarchy";
import UserType from "./UserType";

const app = Express();

app.use(User);
app.use(Auth);
app.use(Group);
app.use(UserGroup);
app.use(UserHierarchy);
app.use(UserType);

export default app;
