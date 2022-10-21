const mongoose = require('mongoose');
const HousesSchema = new mongoose.Schema({
    titleName: {
        type:String,
        require: true
    },

    }
);
const Houses= mongoose.model('Houses',UserSchema);
module.exports={
    Houses
}
