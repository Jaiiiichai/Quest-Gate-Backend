const AvatarProgress = require('../models/AvatarProgress');

exports.updateAvatarProgress = async (req, res) => {
    try {
        const { avatarId, level_id, lesson_id, reward_id, completed, claimed } = req.body;

        // Check if the progress record exists
        let progress = await AvatarProgress.findOne({
            where: {
                avatar_id: avatarId,
                ...(lesson_id && { lesson_id }), // Include lesson_id if provided
                ...(level_id && { level_id }),  // Include level_id if provided
            }
        });

        if (!progress) {
            // Create new progress if it doesn't exist
            progress = await AvatarProgress.create({
                avatar_id: avatarId,
                level_id,
                lesson_id,
                completed,
                claimed,
                reward_id
            });
        } else {
            // Update existing progress
            await progress.update({
                level_id,
                lesson_id,
                reward_id, // Update reward_id column
                completed: level_id ? completed : progress.completed, // Only update completed for level
                claimed: lesson_id ? claimed : progress.claimed,      // Only update claimed for lesson
            });
        }

        res.status(200).json({ message: 'Avatar progress updated successfully', progress });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
};

exports.checkProgress = async (req, res) => {
    try {
      const { avatarId, lesson_id } = req.body;
  
      const progress = await AvatarProgress.findOne({
        where: {
          avatar_id: avatarId,
          lesson_id: lesson_id,
        },
      });
  
      if (!progress) {
        return res.status(201).json({ message: 'Progress not found', claimed: false });
      }
  
      res.status(200).json({ claimed: progress.claimed });
    } catch (error) {
      console.error('Error checking progress:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };