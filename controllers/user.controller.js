const User = require('../models/user.model').User;
async function createUser(req,res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.pass;
    const userName = req.body.userName;
    const curp = req.body.curp;
    const sellOrRent = req.body.sellOrRent;
    const location = req.body.location;
    const profile = req.body.profile;
    const contact = req.body.contact;
   
    if(firstName && lastName && userName && password && curp && sellOrRent &&location && profile && contact){
        try{
      const  newUser =await new User({
        firstName: firstName,
        lastName: lastName,
        password: password,
        userName: userName,
        sellOrRent: sellOrRent,
        curp:curp,
        location:location,
        profile:profile,
        contact
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
  console.log(req.body)
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const userName= req.body.userName;

  

  let query ={}
  if(firstName || lastName || userName){
    query = {$and: []};
    if (firstName) {
      query["$and"].push({firstName: firstName});
    }

    if (lastName) {
      query["$and"].push({lastName: lastName});
    }

    if (userName) {
      query["$and"].push({userName:  userName});
    }
   
  }   else {
    query = {};
  }

try {
  const service = await House.find(query);
  res.status(200).json({
    message:'All users in DB:',
    obj: service
  })
} catch (err) {
  console.log('ERROR FINDING USER SERVICE');
  res.status(500).json({
    message:'something happend when finding user',
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