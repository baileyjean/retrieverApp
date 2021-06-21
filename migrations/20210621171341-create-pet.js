'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      owner_id: {
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.INTEGER
      },
      species: {
        type: Sequelize.ENUM
      },
      breed: {
        type: Sequelize.ENUM
      },
      age: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.ENUM
      },
      adopt_fee: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      kid_friendly: {
        type: Sequelize.BOOLEAN
      },
      pet_friendly: {
        type: Sequelize.BOOLEAN
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pets');
  }
};