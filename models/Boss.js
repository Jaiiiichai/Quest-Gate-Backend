const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Boss = sequelize.define('Boss', {
    boss_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING },
    attack: { type: DataTypes.INTEGER },
    defense: { type: DataTypes.INTEGER },
    health: { type: DataTypes.INTEGER },
    Skill: { type: DataTypes.STRING },
    Skill_desc: { type: DataTypes.TEXT },
    Skill_chance: { type: DataTypes.FLOAT }
}, {
    timestamps: false // Prevent Sequelize from pluralizing the table name
});

module.exports = Boss;
