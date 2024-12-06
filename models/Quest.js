const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Grunt = require('./Grunt')

const Quest = sequelize.define('Quest', {
    quest_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    quest_name: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    grunt_id: { // Foreign key
        type: DataTypes.INTEGER,
        references: {
            model: Grunt, // Points to the Grunt model
            key: 'grunt_id', // Points to the grunt_id column in Grunt
        },
    },
    category : {type: DataTypes.STRING}
}, {// Specify the actual table name here
    timestamps: false // Prevent Sequelize from pluralizing the table name
});

module.exports = Quest;
