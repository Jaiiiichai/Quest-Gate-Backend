const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Avatar = require('./Avatar');
const Grunt = require('./Grunt');
const Boss = require('./Boss');

const Battle = sequelize.define('Battle', {
    battle_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    result: { type: DataTypes.CHAR }
});

Avatar.hasMany(Battle, { foreignKey: 'avatar_id' });
Battle.belongsTo(Avatar, { foreignKey: 'avatar_id' });
Grunt.hasMany(Battle, { foreignKey: 'grunt_id' });
Battle.belongsTo(Grunt, { foreignKey: 'grunt_id' });
Boss.hasMany(Battle, { foreignKey: 'boss_id' });
Battle.belongsTo(Boss, { foreignKey: 'boss_id' });

module.exports = Battle;
