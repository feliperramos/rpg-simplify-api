const Dice = (sequelize, DataTypes) => {
  const dice = sequelize.define("Dice", {
    diceNumber: DataTypes.INTEGER,
  });

  return dice;
};

module.exports = Dice;
