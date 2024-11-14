const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Lesson = require('./Lesson');

const Quiz = sequelize.define('Quiz', {
    quiz_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    question: { type: DataTypes.TEXT },
    correct_answer: { type: DataTypes.STRING },
    choices: { type: DataTypes.JSON }
});

Lesson.hasMany(Quiz, { foreignKey: 'lesson_id' });
Quiz.belongsTo(Lesson, { foreignKey: 'lesson_id' });

module.exports = Quiz;
