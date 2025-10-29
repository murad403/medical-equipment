import dbConnect from "@/app/backend/config/db";
import verifySeller from "@/app/backend/middlware/verifySeller";
import User from "@/app/backend/modules/user/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function PATCH(req: NextRequest){
    await dbConnect();
    try {
        const verified = verifySeller(req);
        if(verified instanceof NextResponse) return verified;
        const {_id} = verified?.user?.payload;
        const {oldPassword, newPassword} = await req.json();
        if(!_id){
            return NextResponse.json({message: "Seller id missing"}, {status: 400});
        }
        const existingSeller = await User.findById(_id);
        if(!existingSeller){
            return NextResponse.json({message: "Seller does not exists"}, {status: 404});
        }
        const isSellerPasswordMatched = await bcrypt.compare(oldPassword, existingSeller?.password);
        if(!isSellerPasswordMatched){
            return NextResponse.json({message: "Incorrect old password. Please try again."}, {status: 401});
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await User.findByIdAndUpdate(_id, {password: hashedPassword}, {new: true})
        return NextResponse.json({message: "Password updated successfully"}, {status: 200});
    } catch (error) {
        console.log("change password error", error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}