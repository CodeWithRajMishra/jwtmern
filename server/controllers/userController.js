const UserModel= require("../models/userModel");
const bcrypt = require("bcryptjs")
const jwt= require("jsonwebtoken");


const userRegistration=async(req, res)=>{
    const { name, contact, email, password}= req.body;
    const hashedPassword = await bcrypt.hash(password, 8)    
    try {
        const User = await UserModel.create(
          {
            name:name,
            contactno:contact,
            email:email,
            password:hashedPassword
          }
        )
        res.status(200).send({msg:"You are Succesfully Registered!"});
    } catch (error) {
      console.log(error);
    }  
}


const userLogin=async(req, res)=>{
  const {email, password} = req.body;
  try {
       const User= await UserModel.findOne({email:email});
       
       if(!User)
       {
        res.status(400).send({msg:"Invalid Email!"});
       }
       const isMatch = await bcrypt.compare(password, User.password);

       if (!isMatch)
       {
        res.status(400).send({msg:"Invalid Password!"});
       }
       
       const token= jwt.sign({id:User._id}, process.env.TOKEN_KEY,{
        expiresIn: 3 * 24 * 60 * 60,
       }  )

       res.status(200).send({token:token})

  } catch (error) {
      console.log(error);
  }
}

const userAuth=async(req, res)=>{
  const token = req.header("auth-token");
  console.log(token);
  const decoded = jwt.verify(token, process.env.TOKEN_KEY);
  const user = await UserModel.findById(decoded.id);
  res.status(200).send(user);
}





module.exports={
    userRegistration,
    userLogin,
    userAuth
}