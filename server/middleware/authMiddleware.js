export const authMiddleware=(req,res,next)=>{
    const token =req.headers.authorisation
    if (!token) {
        return res.status(401).json({message:"unauthorized"})
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        console.log('Authenticated user:', req.user)
        next()
    } catch (e) {
        console.error('authMiddleware error:',e)
        return res.status(401).json({message:"invalid token"})
    }
}