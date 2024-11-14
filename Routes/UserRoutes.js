const express = require('express')
const router = express.Router();

const users = require('../controllers/UserController')

router.post('/user',users.addUser)
router.post('/login',users.loginUser)

module.exports = router;