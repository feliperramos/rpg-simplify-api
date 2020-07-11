import Express from "express";

import User from "./User";
import Auth from "./Auth";
import Group from "./Group";
import UserGroup from "./UserGroup";
import UserHierarchy from "./UserHierarchy";
import UserType from "./UserType";
import Level from "./Level";
import UserAdvantage from "./UserAdvantage";
import UserAnnotation from "./UserAnnotation";
import UserAttribute from "./UserAttribute";
import UserDisadvantage from "./UserDisadvantage";
import UserEquipment from "./UserEquipment";
import UserExpertise from "./UserExpertise";
import UserInfo from "./UserInfo";
import UserInventory from "./UserInventory";
import UserLevel from "./UserLevel";
import UserSkill from "./UserSkill";

const app = Express();

app.use(User);
app.use(Auth);
app.use(Group);
app.use(UserGroup);
app.use(UserHierarchy);
app.use(UserType);
app.use(Level);
app.use(UserAdvantage);
app.use(UserAnnotation);
app.use(UserAttribute);
app.use(UserDisadvantage);
app.use(UserEquipment);
app.use(UserExpertise);
app.use(UserInfo);
app.use(UserInventory);
app.use(UserLevel);
app.use(UserSkill);

export default app;
