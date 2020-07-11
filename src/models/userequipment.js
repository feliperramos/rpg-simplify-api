const UserEquipment = (sequelize, DataTypes) => {
  const userEquipment = sequelize.define("UserEquipment", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    chain: DataTypes.STRING,
    armlet1: DataTypes.STRING,
    armlet2: DataTypes.STRING,
    chestHolster: DataTypes.STRING,
    beltHolster: DataTypes.STRING,
    leftHem: DataTypes.STRING,
    rightHem: DataTypes.STRING,
    extra_PDR: DataTypes.INTEGER,
    extra_MDR: DataTypes.INTEGER,
    ammunition: DataTypes.INTEGER,
  });

  return userEquipment;
};

module.exports = UserEquipment;
