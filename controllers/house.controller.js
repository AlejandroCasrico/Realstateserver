const House = require('../models/house.model').House;
//const redisUrl='redis-13416.c60.us-west-1-2.ec2.cloud.redislabs.com:13416'

async function createHouse(req,res){
  console.log(req.body)
    const houseName = req.body.name;
    const location = req.body.localizacion;
    const price = req.body.precio;
    const type = req.body.tipo;
    const status = req.body.estatus;
    const direction =req.body.direccion;
    const restrooms =req.body.baño;
    const bedrooms =req.body.bed;
    const state =req.body.estado;
    const description = req.body.descripcion;
    const  meters = req.body.metros;
    const pets = req.body.mascota;
    const child= req.body.niños;

   
    if(houseName && location && price && type&& status && direction && restrooms && bedrooms && state && description &&
      meters && pets && child){
        try{
      const  newHouse = await new House({
        houseName: houseName,
        location: location,
        price: price,
        type: type,
        status: status,
        direction: direction,
        restrooms: restrooms,
        bedrooms: bedrooms,
        state: state,
        description: description,
        meters: meters,
        pets: pets,
        child: child
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
  const price = req.body.precio;
  const type = req.body.tipo;
  const status= req.body.estatus;
try {
  const service = await House.find({

  });
  res.status(200).json({
    message:'All houses in DB:',
    obj: newHouse
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
  const houseName = req.body.name;
  const location = req.body.localizacion;
  const price = req.body.precio;
  const type = req.body.tipo;
  const status = req.body.estatus;
  const direction =req.body.direccion;
  const restrooms =req.body.restrooms;
  const bedrooms =req.body.bed;
  const state =req.body.estado;
  const description = req.body.descripcion;
  const  meters = req.body.metros;
  const pets = req.body.mascota;
  const child= req.body.niños;
  if(houseName && location && price && type&& status && direction && restrooms && bedrooms && state && description &&
    meters && pets && child){
      try{
    const service = await House.updateOne({
      houseName: houseName,
      location: location,
      price: price,
      type: type,
      status: status,
      direction: direction,
      restrooms: restrooms,
      bedrooms: bedrooms,
      state: state,
      description: description,
      meters: meters,
      pets: pets,
      child: child
    })
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

module.exports={
    createHouse, findHouse, UpdateHouse
}