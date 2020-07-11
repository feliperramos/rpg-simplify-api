const UserInventory = (sequelize, DataTypes) => {
  const userInventory = sequelize.define("UserInventory", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    qtt: DataTypes.INTEGER,
    item_name: DataTypes.STRING,
    details: DataTypes.STRING,
  });

  return userInventory;
};

module.exports = UserInventory;
