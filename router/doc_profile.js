const express = require('express');
const docrouter= express.Router();
//const doctor = require('../models/doctor_prrofile');
//const {findOne} = require('../doctor_prrofile');
const Doctor = require('./models/doctor_prrofile');

docrouter.post("/doctor/profile",async(req,res)=>{
   try{
    const{name,email,speciality,gender,address,age,degree,
        registratinno,yearofregistration,stateMedicalcouncil,
        experience,city,stateprovince,country,
    zipcode,userId,image,
} =req.body;
const existingProfile  = await Doctor.findOne({email});
   
    if(existingProfile){
       return res.status(400).json({msg: "Already existing"});}
    
let doctor = new Doctor({
    name,email,speciality,gender,address,age,degree,
        registratinno,yearofregistration,stateMedicalcouncil,
        experience,city,stateprovince,country,
    zipcode,userId,image,
});
doctor =await doctor.save();
res.json(doctor);

   }
   catch(e){
    res.status(500).json({error:e.message})
   }
});
docrouter.get('/doctor/get-profile',async(req,res)=>{
try{
    
    const doctors= await Doctor.find({});
    res.json(doctors);
}catch(e){
res.status(500).json({error:e.message});
}
 });
module.exports= docrouter;