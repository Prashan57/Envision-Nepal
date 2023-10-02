import userSchema from "../models/userSchema.js";

import { verifyToken } from "../utils/token.js";

export const authMiddleware= async(req,res,next)=>{
    const requestToken= req.headers.authorization
    if(!requestToken){
        return res.status(401).json({
            message:"You are not authorized"
        })
    }

    const parsedToken= requestToken.replace("Bearer ","");

    const verifiedData= verifyToken(parsedToken)

    if(!verifiedData){
        return res.status(401).json({
            message:"Not a valid token."
        })
    }


    const registeredUser= await userSchema.exists({
        email:verifiedData.email
    })

    if(!registeredUser){
        return res.status(401).json({
            message:"Not authorized"
        })
    }

    req.registeredUser={
        email:verifiedData.email,
        address:verifiedData.address,
        _id:verifiedData._id
    }

    next()
}
