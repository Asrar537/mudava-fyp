const mongoose= require("mongoose");

const timeSchema = mongoose.Schema({

time:{
    required:true,
    type: String,
    trim: true,
},

date:{
    required:true,
    type:String,
    trim:true
},

istrue:{
    type: Boolean,
    default: false

},
userId:{
    required:true,
type:String
},


});


const Time = mongoose.model("Time",timeSchema);

module.exports = Time;