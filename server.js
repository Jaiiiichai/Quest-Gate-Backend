const express = require('express')
const pool = require('./config/db')
const User = require('./models/User')

const app = express();
const PORT = 3000;

app.get("/", (req,res) =>{
    res.send("Hello world");
})

app.get("/users", async (req,res) => {
    try{
        
        const [rows] = await User.findAll();
        res.json(rows);

    }catch(err){
        console.error("Database connection error:", err.message);
        res.status(500).json({ message: "Database connection failed", error: err.message });
    }
})


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
