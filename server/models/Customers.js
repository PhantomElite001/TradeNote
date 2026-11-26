import db from "./config/db";
export const Customer = {
    
    async createCustomer({user_id,name,phone}){
        const [result]=await db.query("Insert into Customers(user_id,name,phone) values(?,?,?)",[user_id,name,phone])
        return result.insertId;
        transaction.newTrans()

    },
    async updateName({user_id,name}){
        await db.query("UPDATE Customers set name=? where user_id=?",[name,user_id])
    },
    async deleteCustomer({id}){
        await db.query("DELETE from Customers where id=?",[id])
    }
}