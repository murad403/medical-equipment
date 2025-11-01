import dbConnect from "@/app/backend/config/db";
import verifySeller from "@/app/backend/middlware/verifySeller";
import Product from "@/app/backend/modules/product/product.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    await dbConnect();
    try {
        const verified = verifySeller(req);
        if(verified instanceof NextResponse) return verified;
        const {_id} = verified?.user?.payload;
        if(!_id){
            return NextResponse.json({message: "Seller id missing"}, {status: 401});
        }
        const totalProduct = await Product.findById(_id).estimatedDocumentCount();
        return NextResponse.json({message: "Get seller dashboard data", data: {totalProduct}}, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}