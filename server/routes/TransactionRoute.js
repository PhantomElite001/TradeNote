import express from "express"
import { authMiddleware } from "../middleware/authMiddleware"
import { createTransaction ,showHistory} from "../controllers/transactionCont"
const router=express.Router()
router.use(authMiddleware)
router.post('/create',createTransaction)
router.post('/view',showHistory)
router
export default router