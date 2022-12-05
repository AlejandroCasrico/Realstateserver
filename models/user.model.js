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
 childLocationSchema.index({ latitude: 1, longitude: 1 }, { index: true })
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
childProfileSchema.index({ userName: 1, age: 1, mail:1 }, { unique: true })

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
 childContactSchema.index({mail:{type:String, sparse:true}});
 childContactSchema.index({cellphone:{type:String, index:true}});
 
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
  UserSchema.index({firstName:1});
  UserSchema.index({lastName:{type:String, index:true}});
  UserSchema.index({password:{type:String, index:true}});
  UserSchema.index({userName:{type:String, unique:true}});
  UserSchema.index({curp:{type:String, unique:true}});
const User= mongoose.model('User',UserSchema);
module.exports={
    User
}
