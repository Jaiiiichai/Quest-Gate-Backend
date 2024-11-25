const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // adjust the path to your db configuration

const AvatarProgress = sequelize.define('AvatarProgress', {
    progress_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    avatar_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Avatars', // The name of the model being referenced
            key: 'avatar_id', // The key in the referenced model
        },
    },
    level_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Levels', // The name of the model being referenced
            key: 'level_id', // The key in the referenced model
        },
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    claimed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    lesson_id:{
        type: DataTypes.INTEGER,
        allowNull : true
    },
    reward_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false, // Prevent Sequelize from adding `createdAt` and `updatedAt` columns
    tableName: 'AvatarProgress', // Specify the actual table name here
});

module.exports = AvatarProgress;
