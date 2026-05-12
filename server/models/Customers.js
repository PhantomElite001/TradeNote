import db from "./config/db"
import { updateName } from "./User"
export const methods ={
    async getCustomerId({name}){
        db.query("SELECT id from Customers where name=?",[name])
    },
    async createCustomer({user_id,name,phone}){
        await db.query("Insert into Customers(user_id,name,phone) values(?,?,?)",[user_id,name,phone])
    },
    async updateName({user_id,}){},
    async deleteCustomer({id}){
        await db.query("DELETE from Customers where id=?",[id])

}