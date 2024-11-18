const express = require('express');
const cors = require('cors');
const userRoutes = require('./Routes/UserRoutes');
const avatarRoutes = require('./Routes/AvatarRoutes');
const itemRoutes = require('./Routes/ItemRoutes');
const bagRoutes = require('./Routes/BagRoutes')
const sequelize = require('./config/db'); // Make sure this points to your sequelize configuration

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
