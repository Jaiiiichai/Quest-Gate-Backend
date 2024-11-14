const Avatar = require('../models/Avatar');
const sequelize = require('../config/db');

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
