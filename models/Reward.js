const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Quest = require('./Quest');
const Lesson = require('./Lesson');
const Item = require('./Item');
const Battle = require('./Battle');

const Reward = sequelize.define('Reward', {
    reward_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    coins: { type: DataTypes.INTEGER },
    exp: { type: DataTypes.INTEGER },
    claimed: { type: DataTypes.BOOLEAN }
}, {// Specify the actual table name here
    timestamps: false // Prevent Sequelize from pluralizing the table name
});

Quest.hasMany(Reward, { foreignKey: 'quest_id' });
Reward.belongsTo(Quest, { foreignKey: 'quest_id' });
Lesson.hasMany(Reward, { foreignKey: 'lesson_id' });
Reward.belongsTo(Lesson, { foreignKey: 'lesson_id' });
Item.hasMany(Reward, { foreignKey: 'item_id' });
Reward.belongsTo(Item, { foreignKey: 'item_id' });
Battle.hasMany(Reward, { foreignKey: 'battle_id' });
Reward.belongsTo(Battle, { foreignKey: 'battle_id' });

module.exports = Reward;
