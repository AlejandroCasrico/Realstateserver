const mongoose = require('mongoose');
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
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    direction:{
        type:String,
        require:true

    },
    restrooms:{
        type: String,
        require:true
    },
    bedrooms:{
        type: String,
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
        type: String,
        require:true
    },
    pets:{
        type:String,
        require:true
    },
    child:{
        type:String,
        require:true  
    },
    extras:{

    },
    contact:{

    },
    houseImage:{
        type:String,
        require:true    
    }
    }
);
const Houses= mongoose.model('Houses',HouseSchema);
module.exports={
    Houses
}
