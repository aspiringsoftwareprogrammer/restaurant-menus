// models/Item.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const Item = sequelize.define('Item', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    vegetarian: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false // Default value for vegetarian is false
    }
});

module.exports = Item;
