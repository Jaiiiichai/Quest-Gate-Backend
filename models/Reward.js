const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Quest = require('./Quest');
const Lesson = require('./Lesson');
const Item = require('./Item');
const Level = require('./Level'); // Import Level model instead of Battle

const Reward = sequelize.define('Reward', {
    reward_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    coins: { type: DataTypes.INTEGER },
    exp: { type: DataTypes.INTEGER }
}, {
    timestamps: false // Prevent Sequelize from pluralizing the table name
});

// Define relationships
Quest.hasMany(Reward, { foreignKey: 'quest_id' });
Reward.belongsTo(Quest, { foreignKey: 'quest_id' });

Lesson.hasMany(Reward, { foreignKey: 'lesson_id' });
Reward.belongsTo(Lesson, { foreignKey: 'lesson_id' });


// Replace Battle relationship with Level
Level.hasMany(Reward, { foreignKey: 'level_id' });
Reward.belongsTo(Level, { foreignKey: 'level_id' });

module.exports = Reward;
