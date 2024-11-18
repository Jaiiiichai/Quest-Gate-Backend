const Item = require('../models/Item');

exports.getAllItems = async (req, res) => {
    try {
        const updatedItems = await Item.findAll({ raw: true }); // Ensure you're getting the latest data

        // Check if data exists
        if (updatedItems.length === 0) {
            return res.status(404).json({ message: "No items found" });
        }

        // Send the latest items as a response
        res.json(updatedItems);
    } catch (error) {
        console.error(error); // Log any errors to the console
        res.status(500).json({ message: 'Error retrieving items', error: error.message });
    }
};
