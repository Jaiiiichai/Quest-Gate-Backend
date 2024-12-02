const Grunt = require('../models/Grunt')

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