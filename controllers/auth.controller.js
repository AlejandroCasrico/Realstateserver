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
async function validateJWT(req,res,next){
    const authHeader = req.headers.authorization;
    let authToken;

    if(authHeader && authHeader.length){
        const tokenParts = authHeader.split(' ');
        console.log(tokenParts)
        if(tokenParts.length == 2) {
            authToken = tokenParts[1];
        }
    }
    try{
        console.log(authToken)
        const result = await jwt.verify(authToken, config.jwt.secretKey);
        console.log(result)
        next();
    }catch(err){
        res.status(401).json({
            message:"UNAUTHORIZED"
        })
    }
}
module.exports={
    generateJWT,validateJWT
}