import dbConnect from "@/app/backend/config/db";
import verifySeller from "@/app/backend/middlware/verifySeller";
import Bid from "@/app/backend/modules/bid/bid.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    await dbConnect();
    try {
        const verified = verifySeller(req);
        if(verified instanceof NextResponse) return verified;
        const {_id} = verified?.user?.payload;
        const result = await Bid.find({sellerId: _id}).populate("customerId", "name").populate("productId", "title category ");
        return NextResponse.json({message: "Get all bids", data: result}, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}