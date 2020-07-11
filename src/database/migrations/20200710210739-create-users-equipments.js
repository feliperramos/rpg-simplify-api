"use strict";

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("usersEquipments", {
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
      chain: {
        type: DataTypes.STRING,
      },
      armlet1: {
        type: DataTypes.STRING,
      },
      armlet2: {
        type: DataTypes.STRING,
      },
      chestHolster: {
        type: DataTypes.STRING,
      },
      beltHolster: {
        type: DataTypes.STRING,
      },
      leftHem: {
        type: DataTypes.STRING,
      },
      rightHem: {
        type: DataTypes.STRING,
      },
      extra_PDR: {
        type: DataTypes.INTEGER,
      },
      extra_MDR: {
        type: DataTypes.INTEGER,
      },
      ammunition: {
        type: DataTypes.INTEGER,
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
    await queryInterface.dropTable("usersEquipments");
  },
};
