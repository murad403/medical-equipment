import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST (req: NextRequest){
    try {
        const product = await req.json();
        // console.log(product?.bid);
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: product?.name,
                            images: [product?.image]
                        },
                        unit_amount: product?.price * 100
                    },
                    quantity: 1
                }
            ],
            mode: "payment",
            success_url: `http://localhost:3000/payment/success?session_id={CHECKOUT_SESSION_ID}&bid=${product?.bidId}`,
            cancel_url: "http://localhost:3000/payment/cancel"
        })
        return NextResponse.json({url: session.url}, {status: 200})
    } catch (error) {
        console.log("payment error", error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}