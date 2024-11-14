const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Grunt = require('./Grunt');
const Boss = require('./Boss');

const Level = sequelize.define('Level', {
    level_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    region: { type: DataTypes.STRING },
    level_number: { type: DataTypes.INTEGER },
    isLocked: { type: DataTypes.BOOLEAN }
});

Grunt.hasMany(Level, { foreignKey: 'grunt_id' });
Level.belongsTo(Grunt, { foreignKey: 'grunt_id' });
Boss.hasMany(Level, { foreignKey: 'boss_id' });
Level.belongsTo(Boss, { foreignKey: 'boss_id' });

module.exports = Level;
