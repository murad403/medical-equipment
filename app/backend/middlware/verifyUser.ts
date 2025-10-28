import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const veryfiToken = (req: NextRequest) =>{
    const token = req.cookies.get("token")?.value;
    if(!token){
        return NextResponse.redirect(new URL("/auth/sign-in", req.url));
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!) as {
            _id: string;
            email: string;
            role: string;
        }
        return {valid: true, decoded};
    } catch (error) {
        return NextResponse.redirect(new URL("/auth/sign-in", req.url));
    }
}

export default veryfiToken;