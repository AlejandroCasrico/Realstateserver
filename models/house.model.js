const mongoose = require('mongoose');
const childSchema = new mongoose.Schema({ name: 'string' });
// const ChildExtras = mongoose.model('ChildExtras', childSchema);
// const ChildContact= mongoose.model('ChildContact', childSchema);
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
    favorite:{
        type:String,
        require:true  
    },
 
    houseImage:{
        type:String,
        require:true  
    },
    //  childExtras: {
    //     ref: 'ChildExtras',
    //     laundry:{
    //         type: String,
    //         require: true
    //     },
    //     parking:{
    //         type: String,
    //         require: true
    //     },
    //     air_conditioner:{
    //         type: String,
    //         require:true
    //     },
    //     heating:{
    //         type: String,
    //         require: true
    //     }
        
    // },
    // childContact :{
    //     ref:'ChildContact',
    //     email:{
    //         type: String,
    //         require: true
    //     },
    //     cellphone:{
    //         type: String,
    //         require: true
    //     }
        
    // }
    }
);
 
const House= mongoose.model('Houses',HousesSchema);
module.exports={
    House
}
