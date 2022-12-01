const House = require('../models/house.model').House;
const url='redis-13416.c60.us-west-1-2.ec2.cloud.redislabs.com:13416'

async function createHouse(req,res){
  console.log(req.body)
 
    const houseName = req.body.houseName;
    const price = req.body.price;
    const type = req.body.type;
    const status = req.body.status;
    const direction =req.body.direction;
    const restrooms =req.body.restrooms;
    const bedrooms =req.body.bedrooms;
    const state =req.body.state;
    const description = req.body.description;
    const meters = req.body.meters;
    const location = req.body.location;
    const extras = req.body.extras;
  

   
    if(  houseName && price && type&& status && direction && restrooms && bedrooms && state && description &&
      meters && location&& extras ){
        try{
      const  newHouse = await new House({
        
        houseName: houseName,
        price: price,
        type: type,
        status: status,
        direction: direction,
        restrooms: restrooms,
        bedrooms: bedrooms,
        state: state,
        description: description,
        meters: meters,
        location: location,
        extras: extras
        
        
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
  console.log(req.body)
  const minPrice = req.body.minPrice;
  const maxPrice = req.body.maxPrice;
  const price = req.body.price;
  const type = req.body.type;
  const status= req.body.status;
  

  let query ={}
  if(price || type || status){
    query = {$and: []};
    if (type) {
      query["$and"].push({type: type});
    }

    if (status) {
      query["$and"].push({status: status});
    }

    if (minPrice) {
      query["$and"].push({price: {"$gte": minPrice}});
    }
    if (maxPrice) {
      query["$and"].push({price: {"$lte": maxPrice}})
    }
   
  }   else {
    query = {};
  }

try {
  const service = await House.find(query);
  res.status(200).json({
    message:'All houses in DB:',
    obj: service
  })
} catch (err) {
  console.log('ERROR FINDING SERVICE');
  res.status(500).json({
    message:'something happend when storing house',
    obj:null
})
  }
  
}


async function UpdateHouse(req,res){
  console.log(req.body)
  const _id = req.body._id
  const houseName = req.body.houseName;
  const price = req.body.price;
  const type = req.body.type;
  const status = req.body.status;
  const direction =req.body.direction;
  const restrooms =req.body.restrooms;
  const bedrooms =req.body.bedrooms;
  const state =req.body.state;
  const description = req.body.description;
  const meters = req.body.meters;
  const location = req.body.location;


  if(houseName  && price && type&& status && direction && restrooms && bedrooms && state && description &&
    meters && location,_id){
      try{
    const service = await House.updateOne({
      _id:_id
    },{
      $set:{
        houseName:houseName,
        price:price,
        type:type,
        status:status,
        direction:direction,
        restrooms:restrooms,
        state:state,
        description:description,
        meters:meters,
        location:location
      }
    });
    res.status(200).json({
      message:'house updated succesfull',
      obj: service
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

async function deleteHouse(req,res){
  console.log(req.body)
   const _id = req.body._id;
   if(_id){
      try{
    const service = await House.deleteOne({
      _id: _id
    });
    res.status(200).json({
      message:'house deleted succesfull',
      obj: service
    })
    }catch (err){
      console.error(err);
      res.status(500).json({
          message:'something happend when deleting house',
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
    createHouse, 
    findHouse, 
    UpdateHouse, 
    deleteHouse,

}