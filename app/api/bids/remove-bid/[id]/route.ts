import dbConnect from "@/app/backend/config/db";
import Bid from "@/app/backend/modules/bid/bid.model";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH (req: NextRequest, {params}: {params: {id: string}}){
    await dbConnect(); 
    try {
        const id = params?.id;
        if(!id){
            return NextResponse.json({ message: "Bid ID missing" }, { status: 400 });
        }
        const result = await Bid.findByIdAndUpdate(id, {isDeleted: true}, {new: true});
        if(!result){
            return NextResponse.json({ message: "Bid not found" }, { status: 404 });
        }
        return NextResponse.json({message: "Removed bid successfully"}, {status: 200});
    } catch (error) {
        console.log(`Remove bid error`, error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}