const UserGroup = (sequelize, DataTypes) => {
  const userGroup = sequelize.define("UserGroup", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    hierarchyID: DataTypes.INTEGER,
  });

  return userGroup;
};

module.exports = UserGroup;
