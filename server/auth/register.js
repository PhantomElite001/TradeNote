import {checkUser,newUser} from "../models/User.js"
import bcrypt from "bcrypt"
import {isEmail} from validator
export const register= async (username,email,password})=>{
        if (!name || !email || !password) {
            throw new Error('missing fields')
        }
        if (! isEmail(email)){
            throw new Error('invalid email format')
        }
        if (password.length<8) {
            throw new Error('password too short')
            
        }
        if (await checkUser(email)){
            throw new Error("this email already exists")
        }
        const hashedpass=await bcrypt.hash(password,11)
        if(!hashedpass){
            throw new Error('hashing failed')
        }
        await newUser(username,email,password:hashedpass})
    }