const express = require('express');
const router = express.Router();
const quiz = require('../controllers/QuizController');

// Route to add a quiz
router.post('/addquiz', quiz.addQuiz);

// Corrected GET route to fetch quizzes by lesson_id
router.get('/quizzes/:lesson_id', quiz.getQuizzesByLesson);
router.get('/quizzes/category/:category', quiz.getRandomQuizByCategory)

module.exports = router;
