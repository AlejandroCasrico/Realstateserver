const jwt = require("jsonwebtoken")
const config = require("../config").configuration;
async function generateJWT(req,res){
    try{

        const token = await jwt.sign({ }, config.jwt.secretKey);
        res.status(200).json({
            token: token
        })
    }catch(err){
        console.error(err);
        res.status(500).json({
            message: err.message
        })
    }
    
}
module.exports={
    generateJWT
}