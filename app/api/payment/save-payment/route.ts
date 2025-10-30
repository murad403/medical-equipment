import dbConnect from "@/app/backend/config/db";
import Bid from "@/app/backend/modules/bid/bid.model";
import Payment from "@/app/backend/modules/payment/payment.model";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest){
    await dbConnect();
    try {
        const paymentData = await req.json();
        // console.log(paymentData);
        const {session_id, bidId} = paymentData;
        if(!session_id){
            return NextResponse.json({message: "Sesson id is missing"}, {status: 401});
        }
        const session = await stripe.checkout.sessions.retrieve(session_id);
        if(session?.payment_status === "paid"){
            await Payment.create({...paymentData, transaction_id: session?.payment_intent});
            await Bid.findByIdAndUpdate(bidId, {payment: "success", status: "pending"}, {new: true});
            return NextResponse.json({message: "Payment successfully!!!"}, {status: 200});
        }
    } catch (error) {
        console.log("payment saved error", error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}