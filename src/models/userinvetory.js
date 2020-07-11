const UsersInventory = (sequelize, DataTypes) => {
  const userInventory = sequelize.define("UsersInventory", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    qtt: DataTypes.INTEGER,
    item_name: DataTypes.STRING,
    details: DataTypes.STRING,
  });

  return userInventory;
};

module.exports = UsersInventory;
