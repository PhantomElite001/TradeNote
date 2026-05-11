import { updateName } from "./models/User.js";
bcrypt = require("bcrypt");
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import login from './auth/login';
import { register } from "../auth/register.js";
config()



// Create a new User
export async function createUser(req,res){
    try {
        const {name,email,password}=req.body
        register({name,email,password})
        res.status(201).json({message:"user creted sucessfully"})
        
        
    } catch (e) {
        console.error('createUser error:',e)
        return res.status(500).json({message:"couldn't create user",
            err:'internal server error'
        })
    }    
    }
export async function login(req,res){
    const {email,password}=req.body
    login({email,password})
}
export async function updateName(req,res){
    const token =req.headers.authorisation
    decoded=jwt.verify(token,process.env.JWT_SECRET)
    const {name}=req.body
    if (!name) {
        return res.status(400).json({message:"missing fields"})
    }
    try {
        await UserModel.updateName({id:decoded.id,newName:name})
        return res.status(200).json({message:"name updated successfully"})
    } catch (e) {
        console.error('updateName error:',e)
        return res.status(500).json({message:"couldn't update name",
            err:'internal server error'
        })
    }

}
