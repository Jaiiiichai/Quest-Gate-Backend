const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Avatar = sequelize.define('Avatar', {
    avatar_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    avatar_name: { type: DataTypes.STRING },
    attack: { type: DataTypes.INTEGER, defaultValue: 30 },
    defense: { type: DataTypes.INTEGER, defaultValue: 40 },
    coins: { type: DataTypes.INTEGER, defaultValue: 0 },
    health: { type: DataTypes.INTEGER, defaultValue: 50 },
    level: { type: DataTypes.INTEGER, defaultValue: 1 },
    exp: { type: DataTypes.INTEGER, defaultValue: 0 }
}, {// Specify the actual table name here
    timestamps: false // Prevent Sequelize from pluralizing the table name
});

User.hasMany(Avatar, { foreignKey: 'user_id' });
Avatar.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Avatar;
