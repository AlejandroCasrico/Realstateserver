const mongoose = require('mongoose');

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
 const childProfileSchema = new mongoose.Schema(
    {  
    userName:{
        type: String,
        require: true
    },
    age:{
        type: Number,
        require: true
    },
    mail:{
        type:String,
        require: true
    }

}

 )
 const childContactSchema = new mongoose.Schema(
    {  
    cellphone:{
        type: Number,
        require: true
    },
    mail:{
        type: String,
        require: true
    }

}

 )
const UserSchema = new mongoose.Schema({
    firstName: {
        type:String,
        require: true
    },
    lastName:{
        type:String,
        require:true
    }
    ,password:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true
    },
    profileImage:{
        type:String
    },
    curp:{
        type:String,
        require:String
    },
    location:{
        type:childLocationSchema,
        require:true
    },
    sellOrRent:{
        type:Number,
        require:true
    },
    profile:{
        type: childProfileSchema,
        require:true
    },
    contact:{
        type:childContactSchema,
        require:true
    }
    }
);
const User= mongoose.model('User',UserSchema);
module.exports={
    User
}
