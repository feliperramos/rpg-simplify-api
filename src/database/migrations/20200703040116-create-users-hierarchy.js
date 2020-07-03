"use strict";

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("usersHierarchy", {
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
      userType: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "UsersTypes",
          key: "id",
        },
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
    await queryInterface.dropTable("usersHierarchy");
  },
};
