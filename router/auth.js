const express = require("express");
const authRouter = express.Router();
const User = require("./models/user");
var bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findOne } = require("./models/user");
const auth = require("../middleware/auth");
authRouter.post("/api/signup",async (req ,res)=>{
try{
  
    const {name,email,password,type 
    }= req.body;
    const existingUser  = await User.findOne({email});
   
    if(existingUser){
       return res.status(400).json({msg: "User is already registered"});
    }
   const hashedPassword = await bcryptjs.hash(password, 8);
   let user = new User({
       email,
       password : hashedPassword,
       name,
        type
   });
   user = await user.save();
   
   res.json(user);
}catch(e){
    res.status(500).json({error: e.message});
}

});
authRouter.post("/api/signin/",async (req, res)=>{
try{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({msg: "User is not rigistered"});
    }
    const isMatched = await bcryptjs.compare(password, user.password);
    if(!isMatched){
        return res.status(400).json({msg: "Inorrect Password"});
    }
    const token = jwt.sign({id : user._id}, "passwordKey");
    res.json({token, ...user._doc});
}catch(e){
res.status(500).json({'error':e.message});
}
});

authRouter.post("/tokenIsValid", async (req, res) => {
    try {
      const token = req.header("x-auth-token");
      if (!token) return res.json(false);
      const verified = jwt.verify(token, "passwordKey");
      if (!verified) return res.json(false);
  
      const user = await User.findById(verified.id);
      if (!user) return res.json(false);
      res.json(true);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
authRouter.get('/',auth, async(req,res)=>{
    const user =await User.findById(req.user); 
    res.json({...user._doc, token: req.token});
});

authRouter.get('/user/get-profile',async(req,res)=>{
  try{
      //const {id} = req.body; 
      

      const users= await User.find();
      res.json(users);
  }catch(e){
  res.status(500).json({error:e.message});
  }
   });
   authRouter.patch("/:id",async(req,res)=>{
    try{
      const id = req.params.id;
      const update = req.body;
      const updateUser = await User.findByIdAndUpdate(id,update, {new:true});
      res.send(updateUser);
      // User.findOneAndUpdate(
      //   {email:req.params.email},
      //   {$set:{ name:req.body.name,
      //     speciality:req.body.speciality,
      //       gender:req.body.gender,
      //       address1:req.body.address1,
      //       address2:req.body.address2,
      //       patientChecked:req.body.patientChecked,
      //       age:req.body.age,
      //       degree:req.body.degree,
      //       experience:req.body.experience,
      //       image: req.body.image,}
          
      //     }
          
    //    );
    }catch(e){res.status(500).json({error: e.message});}
   });
module.exports= authRouter;