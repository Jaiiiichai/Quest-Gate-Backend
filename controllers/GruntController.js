const Grunt = require('../models/Grunt')
const Boss = require('../models/Boss')

exports.getGruntStats = async(req,res) =>{
        try{

            const {grunt_id} = req.params;

            const grunt = await Grunt.findOne({
                where: { grunt_id: grunt_id }
            });
            res.status(200).json(grunt)

        }catch{
            res.status(500).json({message: "Internal server error"})
        }
}
exports.getBossStats = async(req,res) =>{

    const {boss_id} = req.params
    console.log(boss_id)

    try{
        const response = await Boss.findOne({
            where: {boss_id : boss_id}
        })
        res.status(201).json(response)
    }catch{
        res.status(500).json({message: "Internal server Error"})
    }
}