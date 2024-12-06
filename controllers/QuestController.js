const Quest = require('../models/Quest')

exports.getQuests = async(req,res)=>{

    try{

        const response = await Quest.findAll();
        res.status(201).json(response)
    }catch{
        res.status(500).json({message: "Internal server error"})
    }
}