const User = (sequelize, DataTypes) => {
  const user = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: DataTypes.STRING,
    iv: DataTypes.STRING,
    key: DataTypes.STRING,
    name: DataTypes.STRING,
  });

  return user;
};

module.exports = User;
