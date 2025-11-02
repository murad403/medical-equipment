import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const veryfiToken = (req: NextRequest) =>{
    const token = req.cookies.get("accessToken")?.value;
    if(!token){
        return NextResponse.json({message: "Unauthorized access"}, {status: 401});
    }
    try {
        const decoded: any = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET_KEY!);
        return {valid: true, decoded};
    } catch (error) {
        NextResponse.json({message: "Invalid token"}, {status: 403});
    }
}

export default veryfiToken;