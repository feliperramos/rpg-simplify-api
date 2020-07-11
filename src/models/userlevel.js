const UsersLevel = (sequelize, DataTypes) => {
  const userLevel = sequelize.define("UsersLevel", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    xp: DataTypes.INTEGER,
  });

  return userLevel;
};

module.exports = UsersLevel;
