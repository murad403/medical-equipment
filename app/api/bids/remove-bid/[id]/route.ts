import dbConnect from "@/app/backend/config/db";
import Bid from "@/app/backend/modules/bid/bid.model";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE (req: NextRequest, {params}: {params: {id: string}}){
    await dbConnect(); 
    try {
        const {id} = params;
        await Bid.findByIdAndDelete(id);
        return NextResponse.json({message: "Removed bid successfully"}, {status: 200});
    } catch (error) {
        console.log(`Remove bid error`, error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}