const UserLevel = (sequelize, DataTypes) => {
  const userLevel = sequelize.define("UserLevel", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    xp: DataTypes.INTEGER,
  });

  return userLevel;
};

module.exports = UserLevel;
