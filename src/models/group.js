const Group = (sequelize, DataTypes) => {
  const group = sequelize.define("Group", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    img: DataTypes.STRING,
  });

  return group;
};

module.exports = Group;
