import dbConnect from "@/app/backend/config/db";
import verifySeller from "@/app/backend/middlware/verifySeller";
import Bid from "@/app/backend/modules/bid/bid.model";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH (req: NextRequest, context: {params: Promise<{id: string}>}) {
    await dbConnect();
    try {
        const verified = verifySeller(req);
        if(verified instanceof NextResponse) return verified;
        const data = await req.json();
        const {id} = await context.params;
        if(!id){
            return NextResponse.json({message: "Bid Id is missing!"}, {status: 404});
        }
        const existsBid = await Bid.findById(id); 
        if(!existsBid){
            return NextResponse.json({message: "Bid are not found!"}, {status: 404});
        }
        await Bid.findByIdAndUpdate(id, data, {new: true});
        return NextResponse.json({message: "Your status updated successfully!"}, {status: 200});
    } catch (error) {
        console.log("payment error", error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}