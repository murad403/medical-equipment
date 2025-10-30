import dbConnect from "@/app/backend/config/db";
import User from "@/app/backend/modules/user/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, context: { params: Promise<{ userId: string }> }){
    await dbConnect();
    try {
        const updatedData = await req.json();
        const {userId} = await context.params;
        const filterData: Record<string, any> = {};
        // console.log(updatedData, filterData);
        Object.keys(updatedData).forEach((key: any) =>{
            if(updatedData[key] !== ""){
                filterData[key] = updatedData[key];
            }
        })
        // const existingUser = await User.findOne({email: filterData?.email});
        // if(existingUser){
        //     return NextResponse.json({message: "Already have an account this email"}, {status: 400});
        // }
        // console.log(updatedData, email);
        const result = await User.findByIdAndUpdate(userId, filterData, {new: true}).select("-createdAt -updatedAt -__v -password");
        return NextResponse.json({message: "User profile updated successfully", data: result}, {status: 200});
    } catch (error) {
        console.log(`Error upadte user ${error}`);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}