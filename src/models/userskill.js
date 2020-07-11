const UserSkill = (sequelize, DataTypes) => {
  const userSkill = sequelize.define("UserSkill", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    skills: DataTypes.TEXT,
    powers: DataTypes.TEXT,
  });

  return userSkill;
};

module.exports = UserSkill;
