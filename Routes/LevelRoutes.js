const express = require('express');
const router = express.Router();
const Level = require('../controllers/LevelController');

router.get('/levels/:region/:level_number', Level.getGruntId);

module.exports = router;
