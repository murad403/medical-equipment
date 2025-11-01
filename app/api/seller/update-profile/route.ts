import dbConnect from "@/app/backend/config/db";
import verifySeller from "@/app/backend/middlware/verifySeller";
import User from "@/app/backend/modules/user/user.model";
import { NextRequest, NextResponse } from "next/server";


export async function PATCH(req: NextRequest){
    await dbConnect();
    try {
        const updatedDoc = await req.json();
        const verified = verifySeller(req);
        if(verified instanceof NextResponse) return verified;
        const {_id} = verified?.user?.payload;
        if(!_id){
            return NextResponse.json({message: "Seller id missing"}, {status: 401});
        }
        const existingSeller = await User.findById(_id);
        if(!existingSeller){
            return NextResponse.json({message: "Seller does not exists!"}, {status: 404});
        }
        const result = await User.findByIdAndUpdate(_id, updatedDoc, {new: true}).select("-password");
        return NextResponse.json({message: "Seller profile updated successfully!", data: result}, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}