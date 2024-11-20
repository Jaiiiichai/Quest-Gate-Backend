const Bag = require('../models/Bag')

const sequelize = require('../config/db');

exports.getAllAcquiredItems = async (req, res) => {
    try {
        const query = `
            SELECT 
                i.item_id, 
                i.item_name, 
                i.item_type, 
                i.effect_description, 
                i.price, 
                i.image, 
                b.avatar_id, 
                COUNT(b.user_item_id) AS item_count
            FROM Items i
            INNER JOIN Bags b ON i.item_id = b.item_id
            GROUP BY i.item_id, b.avatar_id;
        `;

        // Execute the raw SQL query using sequelize.query
        const [results, metadata] = await Bag.sequelize.query(query);

        res.status(200).json(results); // Return results with 200 status code
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.addItemtoBag = async (req, res) => {
    try {
        const { avatarId, itemId } = req.body;

        // Validate that avatarId and itemId are provided
        if (!avatarId || !itemId) {
            return res.status(400).json({ message: 'avatarId and itemId are required' });
        }

        // Add item to the bag
        const addItem = await Bag.create({
            avatar_id: avatarId,
            item_id: itemId
        });

        res.status(201).json({ message: 'Item Added to bag', item: addItem });
    } catch (err) {
        console.error(err);  // Log the error for debugging
        res.status(500).json({ message: "Internal server error" });
    }
};


