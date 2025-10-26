import dbConnect from '@/app/backend/config/db'
import Bid from '@/app/backend/modules/bid/bid.model'
import Product from '@/app/backend/modules/product/product.model'
import User from '@/app/backend/modules/user/user.model'
import { Types } from 'mongoose'
import { NextRequest, NextResponse } from 'next/server'

export async function GET (req: NextRequest) {
  await dbConnect()
  try {
    const { searchParams } = new URL(req.url)
    const queryId = searchParams.get('query')
    if (!queryId) {
      return NextResponse.json(
        { message: 'Query parameter missing' },
        { status: 400 }
      )
    }
    const result = await Bid.find({
      customerId: new Types.ObjectId(queryId), isDeleted: false
    }).populate({path: "productId", populate: {path: "sellerId"}}).populate("customerId")
    return NextResponse.json(
      { message: 'Retrived all bids', data: result },
      { status: 200 }
    )
  } catch (error) {
    console.log(`Get current user bids`, error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
