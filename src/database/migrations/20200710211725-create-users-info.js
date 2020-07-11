"use strict";

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("usersInfo", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      groupID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Groups",
          key: "id",
        },
      },
      name: {
        type: DataTypes.STRING,
      },
      biography: {
        type: DataTypes.TEXT,
      },
      class: {
        type: DataTypes.STRING,
      },
      subclass: {
        type: DataTypes.STRING,
      },
      hpMax: {
        type: DataTypes.INTEGER,
      },
      hp: {
        type: DataTypes.INTEGER,
      },
      mpMax: {
        type: DataTypes.INTEGER,
      },
      mp: {
        type: DataTypes.INTEGER,
      },
      pm: {
        type: DataTypes.INTEGER,
      },
      damage: {
        type: DataTypes.STRING,
      },
      magicDamage: {
        type: DataTypes.STRING,
      },
      criticalDamage: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("usersInfo");
  },
};
