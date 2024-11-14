const User = require('../models/User')
const sequelize = require('../config/db'); // Ensure the path is correct

exports.addUser = async (req, res) => {
    try {
        // Extract data from the request body
        const { username, email, password } = req.body;

        // Create a new user with the extracted data
        const newUser = await User.create({ username, email, password });
        // Send a success response with the newly created user
        res.status(201).json({ message: 'User created', user: newUser });

    } catch (err) {
        console.error("Error creating user:", err.message);
        res.status(500).json({ message: 'Error creating user', error: err.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Call the stored procedure
        const result = await User.sequelize.query(
            'CALL loginUser(:email, :password)',
            {
                replacements: { email, password },
                type: sequelize.QueryTypes.SELECT
            }
        );

        // Check if the result is valid
        if (result && result.length > 0) {
            const avatar_id = result[0][0].avatar_id;  // Assuming the avatar_id is in the first row
            res.status(200).json({avatar_id: avatar_id});
        } else {
            res.status(404).json({ status: 'error', message: 'Avatar not found or incorrect credentials' });
        }
    } catch (err) {
        console.error('Error logging in:', err.message);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};
