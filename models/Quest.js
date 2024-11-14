const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Quest = sequelize.define('Quest', {
    quest_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    quest_name: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT }
});

module.exports = Quest;
