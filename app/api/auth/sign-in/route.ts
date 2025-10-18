import dbConnect from "@/app/backend/config/db";
import User from "@/app/backend/modules/user/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse){
    await dbConnect();
    try {
        const user = await req.json();
        const existingUser = await User.findOne({email: user.email})
    } catch (error) {
        
    }
}