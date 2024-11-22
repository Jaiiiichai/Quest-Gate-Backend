const Lesson = require('../models/Lesson')

exports.getAllLesson = async(req,res) =>{

    try{

        const response = await Lesson.findAll();
        res.json(response)

    }catch(err){
        console.log(err)
    }
}
exports.createLesson = async (req, res) => {
    try {
      const { lesson_name, lesson_content, category, difficulty } = req.body;
  
      const newLesson = await Lesson.create({
        lesson_name,
        lesson_content,
        category,
        difficulty,
      });
  
      res.status(201).json({
        message: 'Lesson created successfully!',
        data: newLesson,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to create lesson', error: err.message });
    }
  };