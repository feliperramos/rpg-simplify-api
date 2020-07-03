const UserHierarchy = (sequelize, DataTypes) => {
  const userHierarchy = sequelize.define("UserHierarchy", {
    userID: DataTypes.INTEGER,
    userType: DataTypes.INTEGER,
  });

  return userHierarchy;
};

module.exports = UserHierarchy;
