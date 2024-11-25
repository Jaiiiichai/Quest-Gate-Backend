const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Lesson = require('./Lesson');

const Quiz = sequelize.define('Quiz', {
    quiz_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    lesson_id: { type: DataTypes.INTEGER },
    question: { type: DataTypes.TEXT },
    correct_answer: { type: DataTypes.STRING },
    choices: { type: DataTypes.JSON }
}, {// Specify the actual table name here
    timestamps: false // Prevent Sequelize from pluralizing the table name
});

Lesson.hasMany(Quiz, { foreignKey: 'lesson_id' });
Quiz.belongsTo(Lesson, { foreignKey: 'lesson_id' });

module.exports = Quiz;
