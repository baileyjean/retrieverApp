'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    static associate(models) {
      Pet.belongsTo(models.User, {
        foreignKey: 'owner_id',

        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Pet.hasMany(models.Comment, {
        foreignKey: 'pet_id',
        // as: 'comments',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Pet.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      location: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      species: {
        type: DataTypes.ENUM,
        values: [
          'reptile',
          'amphibian',
          'bird',
          'insect/arachnid',
          'rodent',
          'weasel',
          'canine',
          'feline',
          'fish',
          'other'
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
        type: DataTypes.STRING,
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
