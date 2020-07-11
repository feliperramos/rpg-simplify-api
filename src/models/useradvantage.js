const UserAdvantage = (sequelize, DataTypes) => {
  const userAdvantage = sequelize.define("UserAdvantage", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    description: DataTypes.TEXT,
  });

  return userAdvantage;
};

module.exports = UserAdvantage;
