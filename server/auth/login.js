const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken ");
require('dotenv').config()
const UserModel = require("./models/User");

exports.login= async (req,res)=>{
    try {
        const {email,password}=req.body
        if (!email || !password) {
            throw new Error("missing fields")
        }
        if (!validator.isEmail(email)){
            throw new Error("invalid email format")
        }
        if (password.length<8) {
            throw new Error("password too short")
        }
        if(!(await UserModel.checkUser(email))){
            throw new Error("User does not exist")
        }
        const hashedpass=UserModel.getPassword(email)
        const valid = bcrypt.compare(password,hashedpass)
        if(!valid){
            throw new Error("wrong password")
        }
        const id = UserModel.getId(email)
        const token =jwt.sign({email,id},process.env.JWT_SECRET)
        return token
        } catch (e) {
        
    }
}
