const UserType = (sequelize, DataTypes) => {
  const userType = sequelize.define("UserType", {
    name: DataTypes.STRING,
  });

  return userType;
};

module.exports = UserType;
