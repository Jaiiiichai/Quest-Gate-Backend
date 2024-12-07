const Reward = require('../models/Reward'); // Assuming Reward model is set up

// Handle POST request to fetch reward data based on quest_id, lesson_id, or battle_id
exports.getReward = async (req, res) => {
  try {
    const { quest_id, lesson_id, level_id } = req.body; // Get data from POST body

    // Fetch reward based on lesson_id (you can add more conditions for quest_id and battle_id)
    const reward = await Reward.findOne({
      where: {
        quest_id: quest_id,
        lesson_id: lesson_id,
        level_id: level_id
      }
    });

    if (!reward) {
      return res.status(404).json({ message: 'Reward not found' });
    }

    // Send response with relevant data: coins, exp, and claimed status
    res.json({
      reward_id : reward.reward_id,
      coins: reward.coins,
      exp: reward.exp,
      claimed: reward.claimed,
      item_id : reward.item_id
    });
  } catch (error) {
    console.error('Error fetching reward:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
