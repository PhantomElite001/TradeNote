import db from "./config/db"
export const methods={
    async newTrans({user_id,customer_id,desc,type,amount,status}){
        await db.query("INSERT INTO Transactions(user_id,customer_id,desc,type,amount,status) VALUES(?,?,?,?,?,?)"[user_id,customer_id,desc,type,amount,status])

    },
    async getCustomerHistory({user_id,customer_id}){
        await db.query("SELECT * from Transactions where user_id=? AND customer_id=?",[user_id,customer_id])
    }

}