import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();


const tokenSecret= process.env.JWT_SECRET||"tokenSecret"
const expiresIn= process.env.JWT_EXPIRE||"2m"


export const generateToken=(data)=>(
    jwt.sign(data,tokenSecret,{expiresIn})
)

export const verifyToken = (token) => {
    try {
      const decoded = jwt.verify(token, tokenSecret);
      const currentTimestamp = Math.floor(Date.now() / 1000);
  
      if (decoded.exp && decoded.exp < currentTimestamp) {
        // Token has expired
        return null;
      }
  
      return decoded;
    } catch (e) {
      return null;
    }
  };
  
