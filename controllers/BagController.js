const Bag = require('../models/Bag')
const Avatar = require('../models/Avatar')
const Item = require('../models/Item')

exports.getAllAcquiredItems = async(req,res)=>{
    try{
        const response = await Bag.findAll();
        res.status(201).json(response)
    }catch(err){
        res.status(500).json({message: "Internal server error"})
    }
}
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


