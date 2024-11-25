const express = require('express');
const router = express.Router();
const reward = require('../controllers/RewardController')

router.post('/getReward',reward.getReward)


module.exports = router;