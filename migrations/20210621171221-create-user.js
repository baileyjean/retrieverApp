'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
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
      username: {
        type: DataTypes.VARCHAR(255),
        allowNull: false
      },
      email: {
        type: DataTypes.VARCHAR(255),
        allowNull: false,
        validate: { isEmail: true }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bio: {
        type: DataTypes.VARCHAR(255),
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
    await queryInterface.dropTable('users')
  }
}
