const User = (sequelize, DataTypes) => {
  const user = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    iv: DataTypes.STRING,
    key: DataTypes.STRING,
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return user;
};

export default User;
