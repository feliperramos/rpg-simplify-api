const UserExpertise = (sequelize, DataTypes) => {
  const userExpertise = sequelize.define("UsersExpertise", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    lvl: DataTypes.INTEGER,
    expertiseName: DataTypes.STRING,
  });

  return userExpertise;
};

module.exports = UserExpertise;
