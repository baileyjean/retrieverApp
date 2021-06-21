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
        type: DataTypes.VARCHAR(255),
        allowNull: false
      },
      owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'owner_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      location: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'location',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      species: {
        type: DataTypes.ENUM,
        values: [
          'reptile',
          'amphibian',
          'bird',
          'insect',
          'arachnid',
          'rodent',
          'weasel',
          'canine',
          'feline',
          'fish'
        ],
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      gender: {
        type: DataTypes.ENUM,
        values: ['female', 'male', 'unknown', 'other'],
        allowNull: true
      },
      adopt_fee: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      description: {
        type: DataTypes.VARCHAR(255),
        allowNull: false
      },
      kid_friendly: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      pet_friendly: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pets')
  }
}
