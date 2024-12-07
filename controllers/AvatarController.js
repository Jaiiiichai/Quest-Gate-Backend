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
    const { avatarId, exp, coins } = req.body;

    // Fetch the avatar by avatarId
    const avatar = await Avatar.findOne({ where: { avatar_id: avatarId } });

    if (!avatar) {
      return res.status(404).json({ message: 'Avatar not found' });
    }
    let currentCoins = avatar.coins;
    let currentExp = avatar.exp + exp;
    let currentLevel = avatar.level;
    let attack = avatar.attack;
    let defense = avatar.defense;
    let health = avatar.health;

    // Define level progression parameters
    const baseXP = 20; // XP required to reach level 2
    const scalingFactor = 1.15; // XP scaling factor
    const maxLevel = 15; // Maximum level

    // Determine the XP required for the next level
    let nextLevelXP = Math.floor(baseXP * Math.pow(scalingFactor, currentLevel - 1));

    // Check if the avatar levels up
    while (currentExp >= nextLevelXP && currentLevel < maxLevel) {
      currentExp -= nextLevelXP;
      currentLevel += 1;
      attack += 5; // Increase attack by 5
      defense += 5; // Increase defense by 5
      health += 20; // Increase health by 20
      nextLevelXP = Math.floor(baseXP * Math.pow(scalingFactor, currentLevel - 1)); // Update next level XP
    }

    // If the avatar reaches max level, set exp to the maximum for that level
    if (currentLevel === maxLevel && currentExp >= nextLevelXP) {
      currentExp = nextLevelXP - 1; // Cap exp just below the threshold for next level
    }

    // Update the avatar with the new stats
    const [updated] = await Avatar.update(
      {
        coins: currentCoins + coins,
        exp: currentExp,
        level: currentLevel,
        attack: attack,
        defense: defense,
        health: health,
      },
      { where: { avatar_id: avatarId } }
    );

    if (updated) {
      return res.status(200).json({
        message: 'Avatar updated successfully',
        updatedData: {
          coins: currentCoins + coins,
          exp: currentExp,
          level: currentLevel,
          attack: attack,
          defense: defense,
          health: health,
        },
      });
    }

    return res.status(400).json({ message: 'Avatar update failed' });
  } catch (error) {
    console.error('Error updating avatar rewards:', error.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
