const express = require('express')
const router = express.Router();
const quest = require('../controllers/QuestController')

router.get('/getQuests',quest.getQuests)


module.exports = router;