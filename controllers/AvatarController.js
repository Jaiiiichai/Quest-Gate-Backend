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

exports.updateAvatarRewards = async (req, res) => {
  try {
    const { avatarId, coins, exp } = req.body;

    // Fetch the avatar by avatarId
    const avatar = await Avatar.findOne({ where: { avatar_id: avatarId } });

    if (!avatar) {
      return res.status(404).json({ message: 'Avatar not found' });
    }

    // Get the current coins of the avatar
    const currentCoins = avatar.coins;
    const currentExp = avatar.exp;

    // Add the new coins to the current coins
    const newCoins = currentCoins + coins;
    const newExp = currentExp + exp;

    // Update the avatar with the new total coins and exp
    const [updated] = await Avatar.update(
      { coins: newCoins, exp: newExp },  // Update both coins and exp
      { where: { avatar_id: avatarId } }
    );

    if (updated) {
      return res.status(200).json({ message: 'Avatar updated successfully' });
    }

    return res.status(400).json({ message: 'Avatar update failed' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
