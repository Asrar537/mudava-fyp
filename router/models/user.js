const mongoose= require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        required:true,
        type: String,
        trim: true,
    },
    email: {
        required:true,
        type: String,
        trim: true,
        validate: {
            validator:(val)=>{

                const re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
                return val.match(re);
            },
            message: "please enter valid email address"
        },

    },

    password:{
        required :true,
        type:String,
        validator:(val)=>{

            const re = val.length > 6;
           
        },
        message: "Pasword must longer then 6",
    },
   
    type:{
        required: true,
        type: String,
        trim: true,
    },   
    speciality:{
        
        type:String,
        default:'',
           
       
    },
    gender:{
       
        type:String,
        default:'',
    },
    contactno:{
       
        type:String,
        default:'',
    },
    address1:{
        type:String,
        default:'',
    },
    address2:{
        type:String,
        default:'',
    },
    age:{
        type:String,
        default:'',
    },
    degree:{
        type:String,
        default:'',
    },
  
    experience:{
        type:String,
        default:'',
    },
   patientChecked:{
    type:String,
    default:''
   },
    
    image:{
        type:String,
        default:'',
    },
    istrue:{
        type: Boolean,
        default:
            false
    }
    

});


const User = mongoose.model("User", userSchema);

module.exports = User;