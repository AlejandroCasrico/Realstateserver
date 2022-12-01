const User = require('../models/user.model').User;
async function createUser(req,res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;
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
        contact:contact
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
async function UpdateUser(req,res){
  console.log(req.body)
  const _id = req.body._id
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;
  const userName = req.body.userName;
  const curp = req.body.curp;
  const sellOrRent = req.body.sellOrRent;
  const location = req.body.location;
  const profile = req.body.profile;
  const contact = req.body.contact;

  if(firstName  && lastName && password&& userName && curp && sellOrRent && profile && contact && location,_id){
      try{
    const service = await User.updateOne({
      _id:_id
    },{
      $set:{
        firstName:firstName,
        lastName:lastName,
        password:password,
        userName:userName,
        curp:curp,
        sellOrRent:sellOrRent,
        location:location,
        profile:profile,
        contact:contact
        
      }
    });
    res.status(200).json({
      message:'user updated succesfully',
      obj: service
    })
    }catch (err){
      console.error(err);
      res.status(500).json({
          message:'something happend when updating user',
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
  const user = await User.find(query);
  res.status(200).json({
    message:'All users in DB:',
    obj: user
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

  const loginMail = req.body.userName;
  const loginPassword = req.body.password;

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
async function deleteUser(req,res){
  console.log(req.body)
   const _id = req.body._id;
   if(_id){
      try{
    const service = await User.deleteOne({
      _id: _id
    });
    res.status(200).json({
      message:'user deleted succesfully',
      obj: service
    })
    }catch (err){
      console.error(err);
      res.status(500).json({
          message:'something happend when deleting user',
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
async function deleteManyUsers(req,res){
  console.log(req.body)
   
      try{
    const service = await User.deleteMany({
      age: {
        $lt:18
      }
    });
    res.status(200).json({
      message:'users deleted succesfull',
      obj: service
    })
    }catch (err){
      console.error(err);
      res.status(500).json({
          message:'something happend when deleting all users',
          obj:null
      })
    }
 
} 

module.exports={
    createUser, findUser,loginUser,UpdateUser,deleteUser,deleteManyUsers
}