const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Avatar = require('./Avatar');
const Item = require('./Item');

const Bag = sequelize.define('Bag', {
    user_item_id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    avatar_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: {
            model: Avatar, 
            key: 'id' // Assuming the primary key in Avatar is 'id'
        }
    },
    item_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: {
            model: Item, 
            key: 'id' // Assuming the primary key in Item is 'id'
        }
    }
}, {
    timestamps: false // Prevent Sequelize from pluralizing the table name
});

// Associations
Avatar.hasMany(Bag, { foreignKey: 'avatar_id' });
Bag.belongsTo(Avatar, { foreignKey: 'avatar_id' });

Item.hasMany(Bag, { foreignKey: 'item_id' });
Bag.belongsTo(Item, { foreignKey: 'item_id' });

module.exports = Bag;
