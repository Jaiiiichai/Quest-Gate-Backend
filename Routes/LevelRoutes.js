const express = require('express');
const router = express.Router();
const { getGruntId } = require('../controllers/LevelController');

router.get('/levels/:region/:level_number', getGruntId);

module.exports = router;
