const Level = (sequelize, DataTypes) => {
  const level = sequelize.define("Level", {
    xpNecessary: DataTypes.INTEGER,
    bonusType: DataTypes.STRING,
    bonusPT: DataTypes.INTEGER,
  });

  return level;
};

module.exports = Level;
