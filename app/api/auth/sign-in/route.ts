import dbConnect from "@/app/backend/config/db";
import User from "@/app/backend/modules/user/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest, res: NextResponse){
    await dbConnect();
    try {
        const user = await req.json();
        const existingUser = await User.findOne({email: user.email}).select("-createdAt -updatedAt -__v");
        if(!existingUser){
            return NextResponse.json({message: "User does not exists"}, {status: 400});
        }
        const isPasswordCorrect = await bcrypt.compare(user.password, existingUser.password);
        if(!isPasswordCorrect){
            return NextResponse.json({message: "Incorrect password"}, {status: 400});
        }
        const userObj = existingUser.toObject();
        delete userObj.password;
        // console.log(existingUser);
        return NextResponse.json({message: "User login successfully", data: userObj}, {status: 200});
    } catch (error) {
        console.log(`Error sign-in user ${error}`);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}