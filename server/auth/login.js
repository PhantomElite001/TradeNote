const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken ");
require('dotenv').config()
const UserModel = require("./models/User");

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
