import process from "node:process";
import { Customer } from "../models/Customer.js";
import {transaction} from "models/Transactions.js";
import jwt from "jsonwebtoken";
export async function createCustomer(req,res) {
    const {name,phone}=req.body
    const token=req.headers.authorization
    const decoded= jwt.verify(token, process.env.JWT_SECRET)
    const user_id=decoded.id
    try {
        const customer_id=await Customer.createCustomer({user_id,name,phone})
        transactions.newTrans({user_id,customer_id,"creation",'creation',null})
        return res.status(201).json({message:"customer created"})

    } catch (error) {
        console.log('customer creation error:',error)
        return res.status(500).json({err:"internal server error"})
    }
}
export async function deleteCustomer(req,res) {
     const {username,phone}=req.body
    try {
        const id=await Customer.getCustomerId({username,phone})
        if (!id) {
            return res.status(404).json({message:"customer not found"})
        }
        await Customer.deleteCustomer({id})
        return res.status(200).json({message:"customer deleted"})

    } catch (error) {
        console.log('customer deletion error:',error)
        return res.status(500).json({err:"internal server error"})
    }
}
export async function updateCustomerName(req,res) { 
    const {name,}=req.body
    const token=req.headers.authorization
    const decoded=jwt.verify(token, process.env.JWT_SECRET)
    const user_id=decoded.id
    try {
        await Customer.updateName({user_id,name})
        return res.status(200).json({message:"customer name updated"})
    }
        catch (error) { 
        console.log('customer name update error:',error)
        return res.status(500).json({err:"internal server error"})
    }
}

