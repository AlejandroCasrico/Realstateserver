const jwt = require('jsonwebtoken');
const privateKey = "secretKey";

async function validateToken (req, res, next){
    const authHeader = req.headers.authorization;
    let authToken;

    if(authHeader && authHeader.length){
        const tokenParts = authHeader.split('');
        if(tokenParts.length ===2 ){
            authToken= tokenParts[1];
        }
        try{
            await jwt.verify(token,config.jwt.secret);
            next();
        }catch(err){
            console.error("INVALID TOKEN");
        }
    }else{
        
    }


}