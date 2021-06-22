'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Pet, {
        foreignKey: 'owner_id',
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
        type: DataTypes.STRING,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      bio: {
        type: DataTypes.STRING,
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
