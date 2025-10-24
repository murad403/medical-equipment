import dbConnect from '@/app/backend/config/db'
import Bid from '@/app/backend/modules/bid/bid.model';
import Product from '@/app/backend/modules/product/product.model';
import { NextRequest, NextResponse } from 'next/server'

export async function POST (req: NextRequest) {
  await dbConnect()
  try {
    const newBid = await req.json();
    const existingBid = await Bid.findOne({productId: newBid?.productId, customerId: newBid?.customerId});
    if(existingBid){
        return NextResponse.json({message: "You have already placed a bid for this product."}, {status: 400});
    }
    await Bid.create(newBid);
    await Product.findOneAndUpdate({_id: newBid?.productId}, {$inc: {bids: 1}}, {new: true});
    return NextResponse.json({message: "Your bid has been placed successfully!"}, {status: 200});
  } catch (error) {
    console.log(`Error add bid ${error}`)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
