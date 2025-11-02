import dbConnect from "@/app/backend/config/db";
import Product from "@/app/backend/modules/product/product.model";
import User from "@/app/backend/modules/user/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    await dbConnect();
    try {
        const {searchParams } = new URL(req.url);

        const page = Number(searchParams.get("page")) || 1;
        const limit = Number(searchParams.get("limit")) || 12;
        const skip = (page - 1) * limit;
        // console.log(page, limit, skip);

        let searchText = searchParams.get("query") as string || "";
        let filterText = searchParams.get("filter") as string || "";

        let mongoQuery: any = {};
        if(filterText === "auction"){
            mongoQuery["bids"] = {$gt: 0};
        }
        if(searchText){
            mongoQuery["$or"] = [
                {title: {$regex: searchText, $options: "i"}},
                {category: {$regex: searchText, $options: "i"}}
            ]
        }
        const totalAuctions = await Product.countDocuments(mongoQuery);
        // || await Product.find().estimatedDocumentCount()
        const result = await Product.find(mongoQuery).populate({ path: "sellerId", select: "_id", strictPopulate: false }).skip(skip).limit(limit);
        // console.log(result);
        return NextResponse.json({message: "Retrieved all auctions", data: {result, totalAuctions}}, {status: 200});
    } catch (error) {
        console.log("Get all auctions error", error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}