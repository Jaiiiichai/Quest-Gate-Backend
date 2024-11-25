const express = require('express')
const router = express.Router();
const avatar = require('../controllers/AvatarController')

router.post('/getAvatarData', avatar.getAvatarData)
router.put('/updateAvatarCoins', avatar.updateAvatarCoins);
router.put('/updateAvatarRewards', avatar.updateAvatarRewards)


module.exports = router;