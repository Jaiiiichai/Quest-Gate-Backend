const Level = require('../models/Level');
const Boss = require('../models/Boss')

exports.getGruntId = async (req, res) => {
    try {
        const { region, level_number } = req.params;

        // Query the database for grunt_id
        const level = await Level.findOne({
            where: {
                region: region,
                level_number: level_number
            },
            attributes: ['grunt_id','boss_id']
        });

        if (!level) {
            return res.status(404).json({ message: 'Level not found' });
        }

        return res.status(200).json({ grunt_id: level.grunt_id, boss_id: level.boss_id });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

