import dbConnect from "@/app/backend/config/db";
import verifySeller from "@/app/backend/middlware/verifySeller";
import Payment from "@/app/backend/modules/payment/payment.model";
import Product from "@/app/backend/modules/product/product.model";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(req: NextRequest){
    await dbConnect();
    try {
        const verified = verifySeller(req);
        if(verified instanceof NextResponse) return verified;
        const {_id} = verified?.user?.payload;
        if(!_id){
            return NextResponse.json({message: "Seller id missing"}, {status: 401});
        }
        const totalProduct = await Product.find({sellerId: _id}).estimatedDocumentCount();
        const totalSold = await Payment.find({sellerId: _id}).estimatedDocumentCount();
        // console.log("type of", typeof _id, _id);
        const result = await Payment.aggregate([
            {$match: {sellerId: new mongoose.Types.ObjectId(_id)}},
            {$group: {_id: null, revenue: {$sum: "$amount"}}}
        ]);
        const totalRevenue = result[0]?.revenue || 0;
        // console.log(totalRevenue);
        return NextResponse.json({message: "Get seller dashboard data", data: {totalProduct, totalSold, totalRevenue}}, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}