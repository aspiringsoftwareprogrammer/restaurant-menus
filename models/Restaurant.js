const {sequelize} = require('../db');
const { Sequelize, Model, DataTypes } = require('sequelize');

// TODO - create a Restaurant model

/**
In /models/Restaurant.js, define a Restaurant model. The Restaurant model should have the following properties:
name: a string
location: a string
cuisine: a string
 */

class Restaurant extends Model{}

Restaurant.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING, 
    cuisine: DataTypes.STRING
},{
    sequelize: sequelize,
    modelName: "Restaurant"
})

module.exports = {Restaurant};