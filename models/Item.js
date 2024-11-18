const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Item = sequelize.define('Item', {
    item_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    item_type: { type: DataTypes.STRING },
    item_name: { type: DataTypes.STRING },
    effect_description: { type: DataTypes.TEXT },
    price: { type: DataTypes.INTEGER },
    image: {type: DataTypes.STRING}
},{// Specify the actual table name here
    timestamps: false // Prevent Sequelize from pluralizing the table name
});

module.exports = Item;
