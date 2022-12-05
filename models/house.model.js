const mongoose = require('mongoose');
 const childExtrasSchema = new mongoose.Schema(
        {  
        laundry:{
            type: Boolean,
            require: true
        },
        parking:{
            type: Boolean,
            require: true
        },
        air_conditioner:{
            type: Boolean,
            require:true
        },
        heating:{
            type: Boolean,
            require: true
        }

    }

     )
       childExtrasSchema.index({laundry:{type:Boolean, sparse:true}});
       childExtrasSchema.index({parking:{type:Boolean, sparse:true}});
       childExtrasSchema.index({air_conditioner:{type:Boolean, sparse:true}});
       childExtrasSchema.index({heating:{type:Boolean, sparse:true}});
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
     childLocationSchema.index({ latitude: 1, longitude: 1}, { index: true })
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
    },
  
     favorite:{
         type:Boolean,
         require:true  
    },
 
     houseImage:{
         type:String,
         require:true  
    },
   
     extras:{
         type:[childExtrasSchema],
         require: true
     }
     
    }
);

HousesSchema.index({houseName:1});
HousesSchema.index({type:{type:String, index:true}});
HousesSchema.index({status:{type:String, index:true}});
HousesSchema.index({price:{type:Number, index:true}});
const House= mongoose.model('Houses',HousesSchema);
module.exports={
    House
}
