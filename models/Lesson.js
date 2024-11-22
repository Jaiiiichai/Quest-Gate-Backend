const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Lesson = sequelize.define('Lesson', {
    lesson_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    lesson_name: { type: DataTypes.STRING },
    lesson_content: { type: DataTypes.TEXT },
    category: { type: DataTypes.STRING },
    difficulty: { type: DataTypes.INTEGER }
}, {// Specify the actual table name here
    timestamps: false // Prevent Sequelize from pluralizing the table name
});

module.exports = Lesson;
