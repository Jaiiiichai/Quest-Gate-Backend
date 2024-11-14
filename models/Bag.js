const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Avatar = require('./Avatar');
const Item = require('./Item');

const Bag = sequelize.define('Bag', {
    user_item_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
});

Avatar.hasMany(Bag, { foreignKey: 'avatar_id' });
Bag.belongsTo(Avatar, { foreignKey: 'avatar_id' });
Item.hasMany(Bag, { foreignKey: 'item_id' });
Bag.belongsTo(Item, { foreignKey: 'item_id' });

module.exports = Bag;
