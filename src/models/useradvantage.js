const UserAdvantage = (sequelize, DataTypes) => {
  const userAdvantage = sequelize.define("UsersAdvantage", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    description: DataTypes.TEXT,
  });

  return userAdvantage;
};

module.exports = UserAdvantage;
