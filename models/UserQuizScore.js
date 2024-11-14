const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Quiz = require('./Quiz');

const UserQuizScore = sequelize.define('UserQuizScore', {
    score_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    score: { type: DataTypes.INTEGER },
    isPerfect: { type: DataTypes.BOOLEAN }
});

User.hasMany(UserQuizScore, { foreignKey: 'user_id' });
UserQuizScore.belongsTo(User, { foreignKey: 'user_id' });
Quiz.hasMany(UserQuizScore, { foreignKey: 'quiz_id' });
UserQuizScore.belongsTo(Quiz, { foreignKey: 'quiz_id' });

module.exports = UserQuizScore;
