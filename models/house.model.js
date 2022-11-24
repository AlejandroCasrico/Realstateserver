const mongoose = require('mongoose');
//  const childExtrasSchema = new mongoose.Schema(
//         {  
//         laundry:{
//             type: String,
//             require: true
//         },
//         parking:{
//             type: String,
//             require: true
//         },
//         air_conditioner:{
//             type: String,
//             require:true
//         },
//         heating:{
//             type: String,
//             require: true
//         }

//     }

//      )
     const childLocationSchema = new mongoose.Schema(
        {  
        latitude:{
            type: Number,
            require: true
        },
        longitude:{
            type: Number,
            require: true
        }

    }

     )
const HousesSchema = new mongoose.Schema({
    houseName: {
        type:String,
        require: true
    },
    type:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    
    direction:{
        type:String,
        require:true

    },
    restrooms:{
        type: Number,
        require:true
    },
    bedrooms:{
        type: Number,
        require:true
    },
    state:{
        type: String,
        require:true
    },
    description:{
        type: String,
        require:true
    },
    meters:{
        type: Number,
        require:true
    },
    location:{
        type:childLocationSchema,
        require:true
    }
  
    // favorite:{
    //     type:Boolean,
    //     require:true  
    // },
 
    // houseImage:{
    //     type:String,
    //     require:true  
    // },
   
    //  childExtrasSchema:{
    //      type:[childExtrasSchema],
    //      require: true
    //  },
     
    }
);
 
const House= mongoose.model('Houses',HousesSchema);
module.exports={
    House
}
