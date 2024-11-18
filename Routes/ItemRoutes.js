const express = require('express')
const router = express.Router();
const items = require('../controllers/ItemController')

router.get('/getAllItems',items.getAllItems)

module.exports = router;
