"use strict";

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("usersAttributes", {
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
      strength: {
        type: DataTypes.INTEGER,
      },
      dexterity: {
        type: DataTypes.INTEGER,
      },
      constitution: {
        type: DataTypes.INTEGER,
      },
      wisdom: {
        type: DataTypes.INTEGER,
      },
      charisma: {
        type: DataTypes.INTEGER,
      },
      power: {
        type: DataTypes.INTEGER,
      },
      pdr: {
        type: DataTypes.INTEGER,
      },
      mdr: {
        type: DataTypes.INTEGER,
      },
      will: {
        type: DataTypes.INTEGER,
      },
      initiative: {
        type: DataTypes.INTEGER,
      },
      perception: {
        type: DataTypes.INTEGER,
      },
      aim: {
        type: DataTypes.INTEGER,
      },
      stealth: {
        type: DataTypes.INTEGER,
      },
      agility: {
        type: DataTypes.INTEGER,
      },
      breakIn: {
        type: DataTypes.INTEGER,
      },
      persuasion: {
        type: DataTypes.INTEGER,
      },
      intimidation: {
        type: DataTypes.INTEGER,
      },
      tenacity: {
        type: DataTypes.INTEGER,
      },
      speed: {
        type: DataTypes.INTEGER,
      },
      others: {
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
    await queryInterface.dropTable("usersAttributes");
  },
};
