import dbConnect from '@/app/backend/config/db'
import Bid from '@/app/backend/modules/bid/bid.model';
import Product from '@/app/backend/modules/product/product.model';
import { NextRequest, NextResponse } from 'next/server'

export async function POST (req: NextRequest) {
  await dbConnect()
  try {
    const newBid = await req.json();
    const lastBid = await Bid.findOne().sort({createdAt: -1});
    let newOrderNumber = 0;
    if(!lastBid){
      newOrderNumber = newOrderNumber + 1;
    }
    if(lastBid){
      newOrderNumber = lastBid?.orderNumber + 1;
    }
    // console.log(typeof newOrderNumber, newOrderNumber);
    const existingBid = await Bid.findOne({productId: newBid?.productId, customerId: newBid?.customerId});
    if(existingBid){
        return NextResponse.json({message: "You have already placed a bid for this product."}, {status: 400});
    }
    await Bid.create({...newBid, orderNumber: newOrderNumber});
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
