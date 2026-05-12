import {newTransaction} from './models/Transactions'
import jwt from ("jsonwebtoken")
export async function createTransaction(req,res) {
    const {customer_id,desc,type,amount,status}=req.body
    const token=req.headers.authorization
    decoded=jwt.verify(token, process.env.JWT_SECRET)
    user_id=decoded.id
    try {

        await newTransaction({user_id,customer_id,desc,type,amount,status})
        return res.status(201).json({message:"transaction created"})
    } catch (error) {
        console.log('transaction error:',error)
        return res.status(500).json({err:"internal server error"})
    }
}
export async function showHistory(req,res) {
    const {customer_id}=req.body
    const token=req.headers.authorization
    decoded=jwt.verify(token, process.env.JWT_SECRET)
    user_id=decoded.id
    try {
        await getTransactionHistory({user_id,customer_id})
        return res.status.json({message:"gotten tansaction history"})
    } catch (error) {
        console.log("get customer history error:",error)
    }
    
}
    
