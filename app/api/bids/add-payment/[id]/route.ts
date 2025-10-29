import dbConnect from "@/app/backend/config/db";
import Bid from "@/app/backend/modules/bid/bid.model";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH (req: NextRequest, context: {params: Promise<{id: string}>}) {
    await dbConnect();
    try {
        const payment = await req.json();
        const {id} = await context.params;
        if(!id){
            return NextResponse.json({message: "id is missing"}, {status: 404});
        }
        const existsBid = await Bid.findById(id); 
        if(!existsBid){
            return NextResponse.json({message: "Bid are not found"}, {status: 404});
        }
        await Bid.findByIdAndUpdate(id, payment, {new: true});
        return NextResponse.json({message: "Payment successfully"}, {status: 200});
    } catch (error) {
        console.log("payment error", error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}