import dbConnect from "@/app/backend/config/db";
import Product from "@/app/backend/modules/product/product.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    await dbConnect();
    try {
        let searchText = "";
        const {searchParams } = new URL(req.url);
        if(searchParams ){
            searchText = searchParams.get("query") as string;
        }
        let mongoQuery = {};
        if(searchText){
            mongoQuery = {
            $or: [
                {title: {$regex: searchText, $options: "i"}},
                {category: {$regex: searchText, $options: "i"}}
            ]
        }
        }
        // console.log("params from frontend", query);
        const result = await Product.find(mongoQuery);
        return NextResponse.json({message: "Retrieved all auctions", data: result}, {status: 200});
    } catch (error) {
        console.log("Get all auctions error", error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}