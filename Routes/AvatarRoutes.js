const express = require('express')
const router = express.Router();
const avatar = require('../controllers/AvatarController')

router.post('/getAvatarData', avatar.getAvatarData)
router.put('/updateAvatarCoins/:avatarId', avatar.updateAvatarCoins);


module.exports = router;