const express = require('express')
const router = express.Router();
const bag = require('../controllers/BagController')

router.get('/getItems',bag.getAllAcquiredItems)
router.post('/addItem', bag.addItemtoBag)
router.post('/useItem',bag.useItem)

module.exports = router;