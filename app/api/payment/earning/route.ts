import dbConnect from "@/app/backend/config/db";
import verifySeller from "@/app/backend/middlware/verifySeller";
import Payment from "@/app/backend/modules/payment/payment.model";
import { NextRequest, NextResponse } from "next/server";
// import Product from "@/app/backend/modules/product/product.model";
// import Bid from "@/app/backend/modules/bid/bid.model";
// import User from "@/app/backend/modules/user/user.model";

export async function GET(req: NextRequest){
    await dbConnect();
    try {
        const verified = verifySeller(req);
        if(verified instanceof NextResponse) return verified;
        const {_id} = verified?.user?.payload;
        const result = await Payment.find({sellerId: _id}).populate("customerId", "name photo").populate("productId", "title price");
        return NextResponse.json({message: "Get all payment history", data: result}, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}