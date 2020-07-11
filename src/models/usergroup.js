const UserGroup = (sequelize, DataTypes) => {
  const userGroup = sequelize.define("UsersGroup", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    hierarchyID: DataTypes.INTEGER,
  });

  return userGroup;
};

module.exports = UserGroup;
