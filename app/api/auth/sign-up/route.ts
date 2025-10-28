import dbConnect from "@/app/backend/config/db";
import User from "@/app/backend/modules/user/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import genarateToken from "@/app/backend/utils/genarateToken";

export async function POST(req: NextRequest){
    await dbConnect();
    try {
        const user = await req.json();
        // console.log(user);
        const existingUser = await User.findOne({email: user.email});
        if(existingUser){
            return NextResponse.json({message: "User already exists"}, {status: 400});
        }
        const hashPassword = await bcrypt.hash(user.password, 10);
        const result = await User.create({...user, password: hashPassword});
        const userObj = result.toObject();
        delete userObj.password;
        const response = NextResponse.json({message: "User registered successfully", data: userObj}, {status: 200});
        const accessToken = genarateToken({_id: userObj?.id, email: userObj.email, role: userObj.role});
        // console.log("token", token);
        response.cookies.set("token", accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            path: "/"
        });
        return response;
    } catch (error) {
        console.log(`Error creating user ${error}`);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}
