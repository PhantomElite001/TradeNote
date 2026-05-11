import {login, register,updateName} from "./controlers/UserCont.js"
import express from "express"
import { authMiddleware } from "../middleware/authMiddleware"
const router = express.Router()
router.post('/register', register)
router.post('/login', login)
router.post('/updateName',authMiddleware, updateName)
export default router