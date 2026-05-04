const db = require("./config/db");
const methods={
    async checkUser(email){
        const [rows]= await db.query('SELECT * FROM Users WHERE email=?',[email])
        return rows.lenght>0
    };
    async getId(email){
        const [id]= await db.query('SELECT id FROM Users WHERE email=?',[email])
        return id
    };
    async getPassword(email){
        const [hashedpass]= await db.query('SELECT password FROM Users WHERE email=?',[email])
        return hashedpass
    };
    async newUser({name,email,password}){
        await db.query("INSERT INTO Users(name,email,password) VALUES(?,?,?)",[name,email,password])
    };
    async changeName({id,newName}){
        await db.query('UPDATE Users SET name=? WHERE id=?',[newName,id])
    };
    async deleteUser(id){
       await db.query('DELETE FROM Users WHERE id=?',[id])
    }
}
module.exports=methods