const UsersHierarchy = (sequelize, DataTypes) => {
  const userHierarchy = sequelize.define("UsersHierarchy", {
    userID: DataTypes.INTEGER,
    userType: DataTypes.INTEGER,
  });

  return userHierarchy;
};

module.exports = UsersHierarchy;
