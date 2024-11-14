const express = require('express')
const router = express.Router();
const avatar = require('../controllers/AvatarController')

router.post('/getAvatarData', avatar.getAvatarData)

module.exports = router;