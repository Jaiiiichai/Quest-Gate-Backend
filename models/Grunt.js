const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Grunt = sequelize.define('Grunt', {
    grunt_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING },
    attack: { type: DataTypes.INTEGER },
    defense: { type: DataTypes.INTEGER },
    health: { type: DataTypes.INTEGER }
}, {
    timestamps: false 
});

module.exports = Grunt;
