const UserAttribute = (sequelize, DataTypes) => {
  const userAttribute = sequelize.define("UserAttribute", {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER,
    strength: DataTypes.INTEGER,
    dexterity: DataTypes.INTEGER,
    constitution: DataTypes.INTEGER,
    wisdom: DataTypes.INTEGER,
    charisma: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
    pdr: DataTypes.INTEGER,
    mdr: DataTypes.INTEGER,
    will: DataTypes.INTEGER,
    initiative: DataTypes.INTEGER,
    perception: DataTypes.INTEGER,
    aim: DataTypes.INTEGER,
    stealth: DataTypes.INTEGER,
    agility: DataTypes.INTEGER,
    breakIn: DataTypes.INTEGER,
    intimidation: DataTypes.INTEGER,
    tenacity: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    others: DataTypes.STRING,
  });

  return userAttribute;
};

module.exports = UserAttribute;
