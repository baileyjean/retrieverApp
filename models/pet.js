'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pet.init({
    name: DataTypes.STRING,
    owner_id: DataTypes.INTEGER,
    location: DataTypes.INTEGER,
    species: DataTypes.ENUM,
    breed: DataTypes.ENUM,
    age: DataTypes.INTEGER,
    gender: DataTypes.ENUM,
    adopt_fee: DataTypes.INTEGER,
    description: DataTypes.STRING,
    kid_friendly: DataTypes.BOOLEAN,
    pet_friendly: DataTypes.BOOLEAN,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};