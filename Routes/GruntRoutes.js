const express = require('express');
const router = express.Router();
const grunt = require('../controllers/GruntController');

router.get('/getGrunt/:grunt_id', grunt.getGruntStats);
router.get('/getBoss/:boss_id', grunt.getBossStats )

module.exports = router;
