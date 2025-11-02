import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const verifySeller = (req: NextRequest) =>{
    const token = req.cookies.get("accessToken")?.value;
    // console.log(token);
    // console.log("token", token, "secret key", process.env.NEXT_PUBLIC_JWT_SECRET_KEY);
    if(!token){
        return NextResponse.json({message: "Unauthorized access"}, {status: 401});
    }
    try {
        const decoded: any = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET_KEY!);
        // console.log(decoded);
        if(decoded?.payload?.role !== "seller"){
            return NextResponse.json({message: "Forbidden access"}, {status: 403});
        }
        return {user: decoded};
    } catch (error) {
        return NextResponse.json({message: "Invalid token"}, {status: 403});
    }

}

export default verifySeller;