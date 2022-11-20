const express = require("express");
const authRouter = require("./router/auth");
const docrouter = require('./router/doc_profile')
const timerouter = require('./router/time_request')
const mongoose = require("mongoose");
const db = "mongodb+srv://asrar:asrar123@cluster0.o5sjp8x.mongodb.net/?retryWrites=true&w=majority";
var cors = require('cors');
//init
const PORT=process.env.PORT || 3000;

const app = express();

// middle ware
app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(authRouter);
app.use(docrouter);
app.use(timerouter);


mongoose.
connect(db).then(()=>{
console.log("connected");
}).catch((e)=>{
    console.log(e);
});
app.listen(PORT,'0.0.0.0',  function()  {
});