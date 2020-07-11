const UserDisadvantage = (sequelize, DataTypes) => {
  const userDisadvantage = sequelize.define("UserDisadvantage", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    description: DataTypes.TEXT,
  });

  return userDisadvantage;
};

module.exports = UserDisadvantage;
