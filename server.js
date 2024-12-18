const express = require('express');
const cors = require('cors');
const userRoutes = require('./Routes/UserRoutes');
const avatarRoutes = require('./Routes/AvatarRoutes');
const itemRoutes = require('./Routes/ItemRoutes');
const bagRoutes = require('./Routes/BagRoutes')
const lessonRoutes = require('./Routes/LessonRoutes')
const quizRoutes = require('./Routes/QuizRoutes')
const rewardRoutes = require('./Routes/RewardRoutes')
const AvatarProgressRoutes = require('./Routes/AvatarProgressRoutes')
const LevelRoutes = require('./Routes/LevelRoutes')
const GruntRoutes = require('./Routes/GruntRoutes')
const QuestRoutes = require('./Routes/QuestRoutes')
const sequelize = require('./config/db');

const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Registering the routes
app.use('/api', userRoutes);
app.use('/api', avatarRoutes);
app.use('/api', itemRoutes);
app.use('/api',bagRoutes)
app.use('/api',lessonRoutes)
app.use('/api',quizRoutes)
app.use('/api',rewardRoutes)
app.use('/api', AvatarProgressRoutes)
app.use('/api',LevelRoutes)
app.use('/api',GruntRoutes)
app.use('/api',QuestRoutes)

// Sync the Sequelize models to the database
sequelize.sync() // This will attempt to sync the models and alter the tables if needed.
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });


// Test route
app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
