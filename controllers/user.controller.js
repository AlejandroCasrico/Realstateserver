const User = require('../models/user.model').User;
async function createUser(req,res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;
    const userName = req.body.userName;
   
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
    lastName: lastName,
    userName: userName,
    password:password
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

  const loginMail = req.body.User;
  const loginPassword = req.body.pass;

  if (loginMail && loginPassword){


      try{
          const loginUser = await User.findOne ({                
              userName: loginMail,
              password: loginPassword

          }); 
          console.log(loginUser)
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