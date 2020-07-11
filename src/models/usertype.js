const UsersType = (sequelize, DataTypes) => {
  const userType = sequelize.define("UsersType", {
    name: DataTypes.STRING,
  });

  return userType;
};

module.exports = UsersType;
