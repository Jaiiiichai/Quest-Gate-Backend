const Avatar = require('../models/Avatar');

exports.getAvatarData = async (req, res) => {
  try {
    const {avatarId} = req.body
    const avatarData = await Avatar.findByPk(avatarId);
    res.status(200).json(avatarData); // Set status before sending JSON response
  } catch (err) {
    console.error('Error fetching avatar data:', err.message); // Log the error for debugging
    res.status(500).json({ message: 'Internal Server Error' }); // Send a response message in the catch block
  }
};


exports.updateAvatarCoins = async (req, res) => {
  try {
    const { avatarId, newCoins } = req.body;

    const [updated] = await Avatar.update(
      { coins: newCoins }, // Fields to update
      { where: {avatar_id : avatarId } } // Condition to find the record
    );

    if (updated) {
      return res.status(200).json({ message: 'Avatar updated successfully' });
    }

    return res.status(404).json({ message: 'Avatar not found' });
  } catch (err) {
    console.error('Error updating avatar:', err.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
