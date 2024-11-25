const Quiz = require('../models/Quiz')

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
