const express = require('express')
const router = express.Router();
const lesson = require('../controllers/LessonController')

router.get('/getLessons', lesson.getAllLesson)
router.post('/createLesson',lesson.createLesson)

module.exports = router