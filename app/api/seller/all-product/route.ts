import dbConnect from "@/app/backend/config/db";
import verifySeller from "@/app/backend/middlware/verifySeller";
import Product from "@/app/backend/modules/product/product.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest){
    await dbConnect();
    try {
        const verified = verifySeller(req);
        if(verified instanceof NextResponse) return verified;
        const {_id} = verified?.user?.payload;
        // console.log("user", _id);
        const result = await Product.find({sellerId: _id});
        return NextResponse.json({message: "Retrieved all seller product", data: result}, {status: 200});
    } catch (error) {
        console.log("Error get seller product", error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}