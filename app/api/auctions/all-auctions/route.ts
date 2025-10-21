import dbConnect from "@/app/backend/config/db";
import Product from "@/app/backend/modules/product/product.model";
import { NextResponse } from "next/server";

export async function GET(){
    await dbConnect();
    try {
        const result = await Product.find();
        // console.log("all product", result);
        return NextResponse.json({message: "Retrieved all auctions", data: result}, {status: 200});
    } catch (error) {
        console.log("Get all auctions error", error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}