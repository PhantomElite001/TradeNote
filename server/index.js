import express from "express"
import cors from "cors"
import userRoutes from "./routes/UserRoutes.js"
import transactionRoutes from "./routes/transactionRoute.js"
const app = express()
app.use(cors())
app.use(express.json())
app.use('/user',userRoutes)
app.use('/transaction',transactionRoutes)
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})