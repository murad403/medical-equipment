import dbConnect from "@/app/backend/config/db";
import verifySeller from "@/app/backend/middlware/verifySeller";
import Product from "@/app/backend/modules/product/product.model";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE (req: NextRequest, context : {params: Promise<{id: string}>}) {
    await dbConnect();
    try {
        const verified = verifySeller(req);
        if(verified instanceof NextResponse) return verified;
        const {id} = await context.params;
        if(!id){
            return NextResponse.json({message: "Product id is missing"}, {status: 404})
        }
        await Product.findByIdAndDelete(id);
        return NextResponse.json({message: "Product deleted successfully"}, {status: 200});
    } catch (error) {
        console.log("Error delete product", error);
        return NextResponse.json({message: "Internal server error"}, {status: 500})
    }
}