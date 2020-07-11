const UserDisadvantage = (sequelize, DataTypes) => {
  const userDisadvantage = sequelize.define("UsersDisadvantage", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    description: DataTypes.TEXT,
  });

  return userDisadvantage;
};

module.exports = UserDisadvantage;
