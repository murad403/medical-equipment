import dbConnect from "@/app/backend/config/db";
import verifySeller from "@/app/backend/middlware/verifySeller";
import User from "@/app/backend/modules/user/user.model";
import { NextRequest, NextResponse } from "next/server";


export async function PATCH(req: NextRequest){
    await dbConnect();
    try {
        const verified = verifySeller(req);
        const {withdrawalBalance} = await req.json();
        if(verified instanceof NextResponse) return verified;
        const {_id} = verified?.user?.payload;
        // console.log(_id, withdrawalBalance);
        if(!_id){
            return NextResponse.json({message: "Seller id is missing"}, {status: 404});
        }
        const sellerBalance = await User.findById(_id).select("withdrawAmount");
        // console.log(sellerBalance?.withdrawAmount);
        if(sellerBalance?.withdrawAmount < withdrawalBalance){
            return NextResponse.json({message: "Insufficient Balance"}, {status: 400});
        }
        await User.findByIdAndUpdate(_id, {$inc: {withdrawAmount: -withdrawalBalance}}, {new: true});
        return NextResponse.json({message: "Withdraw are processing"}, {status: 200});
    } catch (error) {
        console.log("withdraw ammount error");
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}