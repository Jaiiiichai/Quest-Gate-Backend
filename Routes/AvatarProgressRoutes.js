const express = require('express');
const progress = require('../controllers/AvatarProgressController');
const router = express.Router();

router.post('/update-progress', progress.updateAvatarProgress);
router.post('/checkProgress',progress.checkProgress)

module.exports = router;
