const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    name:String,
    contactno:String,
    email:String,
    password:String
})

module.exports = mongoose.model("user", userSchema);