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
async function findUser(req,res){
try {
  const service = await User.find({
    firstName: firstName,
    LastName: LastName,
    UserName: UserName,
    Password: Password
  }).save();
  res.status(200).json({
    message:'All users in DB:',
    obj: newUser
  })
} catch (err) {
  console.error(err);
  res.status(500).json({
      message: "user finded!",
      obj:null
  })
  
}
}

async function loginUser (req,res){

  const loginMail = req.body.cor;
  const loginPassword = req.body.pasw;

  if (loginMail && loginPassword){


      try{
          const loginUser = await User.findOne ({                
              Mail: loginMail,
              Password: loginPassword

          }); 
          //validacion
          if (loginUser){

              res.status(200).json({
                  message:"Login User ",
                  obj: loginUser
              })
          }else{//error usuario
              res.status(400).json({
                  message:"credenciales incorectas",
                  obj:null
              })
          }
          //error interno
      }catch (err) {
          console.error(err);
          res.status(500).json({
              message: "Error interno",
              obj:null
          })
      } 
  }else{//ausencia parametros peticion
  res.status(400).json({
      message: "Faltan parametros en la peticion",
      obj:null
  })
  }

}
module.exports={
    createUser, findUser,loginUser
}