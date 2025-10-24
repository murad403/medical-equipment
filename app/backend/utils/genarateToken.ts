import jwt from "jsonwebtoken";
const secretKEY: any = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;

const genarateToken = (payload: any) =>{
    const token = jwt.sign({payload}, secretKEY, {expiresIn: "7d"});
    return token;
}

export default genarateToken;