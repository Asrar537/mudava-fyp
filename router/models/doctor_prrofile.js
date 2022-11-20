const mongoose= require("mongoose");

const doctorSchema = mongoose.Schema({

name:{
    required:true,
    type: String,
    trim: true,
},

email:{
    required:true,
    type:String,
    trim:true
},
speciality:{
    required: true,
    type: String,
    trim: true,
    
   
},
gender:{
    required: true,
    type: String,
    trim: true,

},
address1:{
    required: true,
    type: String,
    trim: true,

},
age:{
    required: true,
    type: String,
    trim: true,
},
degree:{
    required: true,
    type: String,
    trim: true,

},
address2:{
    required: true,
    type: String,
    trim: true,

},

experience:{
    required: true,
    type: String,
    trim: true,
},

userId:{
    required:true,
type:String
},
image:{
    required:true,
        type:String,
     }

});


const Doctor = mongoose.model("Doctor",doctorSchema);

module.exports = Doctor;