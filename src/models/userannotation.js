const UserAnnotation = (sequelize, DataTypes) => {
  const userAnnotation = sequelize.define("UserAnnotation", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    description: DataTypes.TEXT,
  });

  return userAnnotation;
};

module.exports = UserAnnotation;
