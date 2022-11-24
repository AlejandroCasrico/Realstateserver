const House = require('../models/house.model').House;
//const redisUrl='redis-13416.c60.us-west-1-2.ec2.cloud.redislabs.com:13416'

async function createHouse(req,res){
  console.log(req.body)
    const houseName = req.body.name;
    const price = req.body.precio;
    const type = req.body.tipo;
    const status = req.body.estatus;
    const direction =req.body.direccion;
    const restrooms =req.body.restrooms;
    const bedrooms =req.body.bed;
    const state =req.body.estado;
    const description = req.body.descripcion;
    const  meters = req.body.metros;
    const location = req.body.location;
  

   
    if(houseName && price && type&& status && direction && restrooms && bedrooms && state && description &&
      meters && location ){
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
        location: location
        
        
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
  const price = req.body.precio;
  const type = req.body.tipo;
  const status= req.body.estatus;
try {
  const service = await House.findOne({

  });
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
  const houseName = req.body.name;
  const latitude = req.body.lat;
  const longitude = req.body.lon;
  const price = req.body.precio;
  const type = req.body.tipo;
  const status = req.body.estatus;
  const direction =req.body.direccion;
  const restrooms =req.body.restrooms;
  const bedrooms =req.body.bed;
  const state =req.body.estado;
  const description = req.body.descripcion;
  const  meters = req.body.metros;

  if(houseName  && price && type&& status && direction && restrooms && bedrooms && state && description &&
    meters && latitude && longitude){
      try{
    const service = await House.updateOne({
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
      latitude: latitude,
      longitude: longitude
      
      
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

async function deleteHouse(req,res){
  console.log(req.body)
  const houseName = req.body.name;
  const latitude = req.body.lat;
  const longitude = req.body.lon;
  const price = req.body.precio;
  const type = req.body.tipo;
  const status = req.body.estatus;
  const direction =req.body.direccion;
  const restrooms =req.body.restrooms;
  const bedrooms =req.body.bed;
  const state =req.body.estado;
  const description = req.body.descripcion;
  const  meters = req.body.metros;

  if(houseName  && price && type&& status && direction && restrooms && bedrooms && state && description &&
    meters && latitude && longitude){
      try{
    const service = await House.deleteOne({
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
      latitude: latitude,
      longitude: longitude
      
      
    })
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
async function getAllHouses(req, res) {
  console.log(req.body)


  
      try{
    const service = await House.find({
      
    })
    res.status(200).json({
      message:'house succesfull getted',
      obj: service
    })
    }catch (err){
      console.error(err);
      res.status(500).json({
          message:'something happend when deleting house',
          obj:null
      })
    }
  

}


async function getOneHouse(req, res) {
	const pokemonName = req.params.houseName;

	try {
		const response = await axios.get(`..${houseName}`);

		if (response && response.data) {
			res.status(200).json({
				"mensaje": "La solicitud se realizó de forma extitosa",
				"resultado": response.data
			});
		} else {
			res.status(500).json({
				"mensaje": "Ocurrió un error interno",
				"resultado": []
			});
		}

	} catch (err) {
		console.error(err);
		res.status(500).json({
			"mensaje": "Ocurrió un error interno",
			"resultado": []
		});
	}
}

function validateHouseName(req, res, next) {
	const houseName = req.params.houseName;

	if (houseName) {
		next();
	} else {
		res.status(400).json({
			mensaje: "Faltan parámetros en la consulta",
			resultado: []
		});
	}
}
module.exports={
    createHouse, 
    findHouse, 
    UpdateHouse, 
    deleteHouse,
    getAllHouses,
    getOneHouse,
    validateHouseName

}