'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      owner_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'owner_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      location: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      species: {
        type: Sequelize.ENUM,
        values: [
          'reptile',
          'amphibian',
          'bird',
          'insect/arachnid',
          'rodent',
          'weasel',
          'canine',
          'feline',
          'fish'
        ],
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      gender: {
        type: Sequelize.ENUM,
        values: ['female', 'male', 'unknown', 'other'],
        allowNull: true
      },
      adopt_fee: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      kid_friendly: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      pet_friendly: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pets')
  }
}
