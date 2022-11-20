const express = require('express');
const timerouter= express.Router();
//const doctor = require('../models/doctor_prrofile');
//const {findOne} = require('../doctor_prrofile');
const timeSchema = require('./models/time');
timerouter.post("/time",async(req,res)=>{
    try{
     const{userId,time,date
 } =req.body;
 
 let timeS = new timeSchema({date,time,userId
 });
 timeS =await timeS.save();
 res.json(timeS);
    }
    catch(e){
     res.status(500).json({error:e.message})
    }
 });

module.exports= timerouter;