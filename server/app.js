const express = require("express");
const app=express();
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose= require("mongoose");
const userRoute= require("./routes/userRoute");
const PORT = process.env.PORT || 8080
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.DBCONNECTION).then(()=>{
    console.log("DB Connected!!!");
})


app.use("/user", userRoute);



app.listen(PORT, ()=>{
    console.log(`Server Run on ${PORT}`)
})