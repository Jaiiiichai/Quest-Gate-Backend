const Quiz = require('../models/Quiz')
const Lesson = require('../models/Lesson')

exports.addQuiz = async (req, res) => {
    try {
        // Destructure values from the request body
        const { lesson_id, question, correct_answer, choices } = req.body;

        // Create a new quiz entry
        const newQuestion = await Quiz.create({
            lesson_id,
            question,
            correct_answer,
            choices
        });

        res.status(201).json({
            message: 'Lesson created successfully!',
            data: newQuestion,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to create lesson', error: err.message });
    }
};
exports.getQuizzesByLesson = async (req, res) => {
    try {
        // Extract lesson_id from the request parameters
        const { lesson_id } = req.params;

        // Find all quizzes for the specified lesson_id
        const quizzes = await Quiz.findAll({
            where: { lesson_id },
        });

        // If no quizzes are found for the given lesson_id
        if (quizzes.length === 0) {
            return res.status(404).json({
                message: 'No quizzes found for this lesson.',
            });
        }

        // Convert Sequelize instances to plain objects to remove metadata
        const quizData = quizzes.map(quiz => quiz.get({ plain: true }));

        res.status(200).json({
            message: 'Quizzes retrieved successfully!',
            data: quizData,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to retrieve quizzes', error: err.message });
    }
};
exports.getRandomQuizByCategory = async (req, res) => {
    try {
        const { category } = req.params;

        // Find all quizzes for the specified category
        const quizzes = await Quiz.findAll({
            include: {
                model: Lesson,
                where: { category },
            },
        });

        if (quizzes.length === 0) {
            return res.status(404).json({
                message: 'No quizzes found for this category.',
            });
        }

        // Randomly pick a quiz
        const randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];

        // Return only the quiz data in the response
        const quizData = randomQuiz.get({ plain: true });

        // Assuming choices is an array or you need to parse it if it's a string
        const choices = Array.isArray(quizData.choices) ? quizData.choices : JSON.parse(quizData.choices);

        // Structure the response to include only the desired fields
        const response = {
            quiz_id: quizData.quiz_id,
            lesson_id: quizData.lesson_id,
            question: quizData.question,
            correct_answer: quizData.correct_answer,
            choices: choices, // Make sure choices is in the expected format
        };

        res.status(200).json(response);  // Return the response directly

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to retrieve random quiz', error: err.message });
    }
};

