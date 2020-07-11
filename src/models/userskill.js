const UsersSkill = (sequelize, DataTypes) => {
  const userSkill = sequelize.define("UsersSkill", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    skills: DataTypes.TEXT,
    powers: DataTypes.TEXT,
  });

  return userSkill;
};

module.exports = UsersSkill;
