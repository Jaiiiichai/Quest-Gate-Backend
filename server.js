const express = require('express');
const cors = require('cors');
const userRoutes = require('./Routes/UserRoutes'); // Ensure this path is correct
const avatarRoutes = require('./Routes/AvatarRoutes')

const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Registering the user routes
app.use('/api', userRoutes);  // Prefix the route to avoid confusion with other routes
app.use('/api', avatarRoutes); 

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
