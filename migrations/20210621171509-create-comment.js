'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'owner_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      pet_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'pet_id',
        onDelete: 'CASCADE',
        references: {
          model: 'pets',
          key: 'id'
        }
      },
      post: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('comments')
  }
}
