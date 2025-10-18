import dbConnect from "@/app/backend/config/db";
import User from "@/app/backend/modules/user/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest, res: NextResponse){
    await dbConnect();
    try {
        const user = await req.json();
        // console.log(user);
        const existingUser = await User.findOne({email: user.email});
        if(existingUser){
            return NextResponse.json({message: "User already exists"}, {status: 400});
        }
        const hashPassword = bcrypt.hash(user.password, 15);
        let result = await User.create({...user, password: hashPassword});
        delete result.password;
        return NextResponse.json({data: result, message: "User created successfully"}, {status: 200});

    } catch (error) {
        console.log(`Error creating user ${error}`);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}
