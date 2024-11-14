const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // adjust the path to your db configuration

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
}, {// Specify the actual table name here
    timestamps: false // Prevent Sequelize from pluralizing the table name
});

module.exports = User;
