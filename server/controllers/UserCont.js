const UserModel = require("./models/User.js")
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config()



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
        if (password.length<8) {
            return res.status(400).json({message:'password too short'})
            
        }
        if (await UserModel.checkUser(email)){
            return res.status(409).json({message:"this email already exists"})
        }
        const hashedpass=await bcrypt.hash(password,11)
        if(!hashedpass){
            return res.status(500).json({message:'hashing failed'})
        }
        await UserModel.newUser({name,email,password:hashedpass})
        return res.status(201).json({message:'user created successfully'})
        
        
    } catch (e) {
        console.error('createUser error:',e)
        return res.status(500).json({message:"couldn't create user",
            err:'internal server error'
        })
        
    }
}
exports.login= async (req,res)=>{
    try {
        const {email,password}=req.body
        if (!email || !password) {
            return res.status(401).json({message:"missing fields"})
        }
        if (!validator.isEmail(email)){
            return res.status(400).json({message:'invalid email format'})
        }
        if (password.length<8) {
            return res.status(400).json({message:'password too short'})
        }
        if(!(await UserModel.checkUser(email))){
            return res.status(409).json({message="User does not exist"})
        }
        const hashedpass=UserModel.getPassword(email)
        const valid = bcrypt.compare(password,hashedpass)
        if(!valid){
            return res.status(401).json({message:"wrong password"})
        }
        const id = UserModel.getId(email)
        const token=jwt.sign({email,id},process.env.JWT_SECRET)
        } catch (e) {
        
    }
}
exports.updateName=async (req,res)=>{
    
}
