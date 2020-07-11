const UserExpertise = (sequelize, DataTypes) => {
  const userExpertise = sequelize.define("UserExpertise", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    lvl: DataTypes.INTEGER,
    expertiseName: DataTypes.STRING,
  });

  return userExpertise;
};

module.exports = UserExpertise;
