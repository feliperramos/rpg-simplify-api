const UserInfo = (sequelize, DataTypes) => {
  const userInfo = sequelize.define("UserInfo", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    name: DataTypes.STRING,
    biography: DataTypes.TEXT,
    class: DataTypes.STRING,
    subclass: DataTypes.STRING,
    hpMax: DataTypes.INTEGER,
    hp: DataTypes.INTEGER,
    mpMax: DataTypes.INTEGER,
    mp: DataTypes.INTEGER,
    pm: DataTypes.INTEGER,
    damage: DataTypes.STRING,
    magicDamage: DataTypes.STRING,
    criticalDamage: DataTypes.STRING,
  });

  return userInfo;
};

module.exports = UserInfo;
