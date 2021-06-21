'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Pet, {
        foreignKey: 'owner_id',
        as: 'pets',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      User.hasMany(models.Comment, {
        foreignKey: 'owner_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  User.init(
    {
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
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
