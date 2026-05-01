const db = require("./config/db");
const methods={
    async checkUser(email){
        const [rows]= await db.query('SELECT email FROM Users WHERE email=?',[email])
        return rows.lenght>0
    };
    async newUser({name,email,password}){
        await db.query("INSERT INTO Users(name,email,password) VALUES(?,?,?)",[name,email,password])
    };
    async changeName({id,newName}){
        await db.query('UPDATE Users SET name=? WHERE Id=?',[newName,Id])
    };
    async deleteUser(id){
       await db.query('DELETE FROM Users WHERE Id=?',[id])
    }
}
module.exports=methods