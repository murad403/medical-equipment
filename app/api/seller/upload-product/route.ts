import dbConnect from "@/app/backend/config/db";
import Product from "@/app/backend/modules/product/product.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    await dbConnect();
    try {
        const product = await req.json();
        await Product.create(product);
        return NextResponse.json({message: "Product uploaded successfully"}, {status: 200});
    } catch (error) {
        console.log("Upload product error", error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}