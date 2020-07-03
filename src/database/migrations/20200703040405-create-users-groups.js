"use strict";

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("usersGroups", {
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
      hierarchyID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "UsersHierarchy",
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
    await queryInterface.dropTable("usersGroups");
  },
};
