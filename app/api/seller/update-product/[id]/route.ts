import dbConnect from "@/app/backend/config/db";
import verifySeller from "@/app/backend/middlware/verifySeller";
import Product from "@/app/backend/modules/product/product.model";
import { NextRequest, NextResponse } from "next/server";


export async function PATCH (req: NextRequest, context: {params: Promise<{id: string}>}){
    await dbConnect();
    try {
        const verified = verifySeller(req);
        if(verified instanceof NextResponse) return verified;
        const {id} = await context.params;
        const product = await req.json();
        if(!id){
            return NextResponse.json({message: "Product id is missing"}, {status: 404});
        }
        const existsProduct = await Product.findById(id);
        if(!existsProduct){
            return NextResponse.json({message: "Product does not exists!"}, {status: 404});
        }
        await Product.findByIdAndUpdate(id, product, {new: true});
        return NextResponse.json({message: "Product updated successfully!"}, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}