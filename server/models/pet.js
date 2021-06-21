'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    static associate(models) {
      Pet.belongsTo(models.User, {
        foreignKey: 'owner_id',
        as: 'owner',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Pet.hasMany(models.Comment, {
        foreignKey: 'pet_id',
        as: 'comments',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Pet.init(
    {
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
      }
    },
    {
      sequelize,
      modelName: 'Pet',
      tableName: 'pets'
    }
  )
  return Pet
}
