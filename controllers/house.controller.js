const House = require('../models/user.model').User;
const redisUrl='redis-13416.c60.us-west-1-2.ec2.cloud.redislabs.com:13416'
async function createHouse(req,res){
    const houseName = req.body.hn;
    const location = req.body.lc;
    const price = req.body.prc;
    const type = req.body.tp;
   
    if(houseName && location && price && type){
        try{
      const  newHouse = await new House({
        houseName: houseName,
        location: location,
        price: price,
        type: type
      }).save();  
      res.status(200).json({
        message:'house created succesfull',
        obj: newHouse
      })
      }catch (err){
        console.error(err);
        res.status(500).json({
            message:'something happend when storing house',
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
async function findHouse(req,res){
  const location = req.body.lc;
  const price = req.body.prc;
  const type = req.body.tp;
try {
  const service = await House.find({

  });
  res.status(200).json({
    message:'All houses in DB:',
    obj: newHouse
  })
} catch (err) {
  console.log('ERROR FINDING SERVICE');
  
}
}

module.exports={
    createHouse, findHouse
}