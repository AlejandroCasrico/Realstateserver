const User = require('../models/user.model').User;
async function createUser(req,res){
    const firstName = req.body.fn;
    const lastName = req.body.ln;
    const password = req.body.pas;
    const userName = req.body.un;
   
    if(firstName && lastName && userName && password){
        try{
      const  newUser =await new User({
        firstName: firstName,
        lastName: lastName,
        password: password,
        userName: userName
      }).save();  
      res.status(200).json({
        message:'user created!',
        obj: newUser
      })
      }catch (err){
        console.error(err);
        res.status(500).json({
            message:'something happend when storing user',
            obj:null
        })
      }
    }else{
        res.status(400).json({
            message:" Some parameters were missing",
            obj: null
        })
    }

  
}
module.exports={
    createUser
}