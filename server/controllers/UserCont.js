const UserModel = require("./models/User.js")
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jwt");


// Create a new User
exports.createUser= async (req,res)=>{
    try {
        const {name,email,password}=req.body
        if (!name || !email || !password) {
            return res.status(400).json({message:'missing fields'})
        }
        if (!validator.isEmail(email)){
            return res.status(400).json({message:'invalid email format'})
        }
        if (await UserModel.checkUser(email)){
            return res.status(409).json({message:"this email already exists"})
        }
        const hashedpass=await bcrypt.hash(password,10)
        if(!hashedpass){
            return res.status(500).json({message:'hashing failed'})
        }
        await UserModel.newUser({name,email,password:hashedpass})
        return res.status(201).json({message:'user created successfully'})
        
        
    } catch (e) {
        console.error('createUser error',e)
        return res.status(500).json({message:"couldn't create user",
            err:'internal server error'
        })
        
    }
}
exports.updateName=async (req,res)=>{
    
}
