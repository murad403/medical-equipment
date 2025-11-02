import dbConnect from "@/app/backend/config/db";
import verifySeller from "@/app/backend/middlware/verifySeller";
import Payment from "@/app/backend/modules/payment/payment.model";
import Product from "@/app/backend/modules/product/product.model";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/app/backend/modules/user/user.model";

//! get year for time compare--------------------------------------------------------
const now = new Date();
const currentYearStart = new Date(now.getFullYear(), 0, 1);
const previousYearStart = new Date(now.getFullYear() - 1, 0, 1);
const previousYearEnd =  new Date(now.getFullYear() - 1, 11, 31, 23, 59, 59);

export async function GET(req: NextRequest){
    await dbConnect();
    try {
        const verified = verifySeller(req);
        if(verified instanceof NextResponse) return verified;
        const {_id} = verified?.user?.payload;
        if(!_id){
            return NextResponse.json({message: "Seller id missing"}, {status: 401});
        }
        const totalProduct = await Product.find({sellerId: _id}).estimatedDocumentCount();
        const totalSold = await Payment.find({sellerId: _id}).estimatedDocumentCount();
        //! total revenue-----------------------------------------------------------------------------------
        const revenue = await Payment.aggregate([
            {$match: {sellerId: new mongoose.Types.ObjectId(_id)}},
            {$group: {_id: null, revenue: {$sum: "$amount"}}}
        ]);
        const totalRevenue = revenue[0]?.revenue || 0;

        //! growth between previous year and current year-------------------------------------------------------------
        const growth = await Payment.aggregate([
            {
                $facet: {
                    currentYear: [
                        {
                            $match: {
                                createdAt: { $gte: currentYearStart, $lte: now},
                                sellerId: {$eq: new mongoose.Types.ObjectId(_id)}
                            }
                        },
                        {
                            $group: {
                                _id: null,
                                total: {$sum: "$amount"}
                            }
                        }
                    ],
                    previousYear: [
                        {
                            $match: {
                                createdAt: {$gte: previousYearStart, $lte: previousYearEnd},
                                sellerId: {$eq: new mongoose.Types.ObjectId(_id)}
                            }
                        },
                        {
                            $group: {
                                _id: null,
                                total: {$sum: "$amount"}
                            }
                        }
                    ]
                }
            }
        ])
        // console.log("growth", growth[0]);
        const currentTotal = growth[0]?.currentYear[0]?.total || 0;
        const previousTotal = growth[0]?.previousYear[0]?.total || 0;
        const totalProfitGrowth = previousTotal === 0 ? 0 : ((currentTotal - previousTotal) / previousTotal) * 100;
        // console.log(currentTotal, previousTotal, totalProfitGrowth);

        //! profile and loss------------------------------------------------------------------------
        const paymentsDoc = await Payment.find({sellerId: _id});
        const productIds = paymentsDoc.map(doc => doc?.productId);
        const totalProductPrice = await Product.aggregate([
            {
                $match: {
                    _id: {$in: productIds}
                }
            },
            {
                $group: {
                    _id: null,
                    total: {$sum: "$price"}
                }
            }
        ])
        const totalProductSellAmount = await Payment.aggregate([
            {
                $match: { sellerId: new mongoose.Types.ObjectId(_id) }
            },
            {
                $group: {
                    _id: null,
                    total: {$sum: "$amount"}
                }
            }
        ])
        const creditPrice = totalProductPrice[0].total || 0;
        const sellPrice = totalProductSellAmount[0].total || 0;
        let profit = 0;
        let loss = 0;
        if(sellPrice > creditPrice){
            profit = Math.floor(((sellPrice - creditPrice) / creditPrice) * 100);
        }else{
            loss = Math.floor(((sellPrice - creditPrice) / creditPrice) * 100);
        }
        
        // console.log(profit, loss);

        const withdrawAmount = await User.findById(_id).select("withdrawAmount");

        return NextResponse.json({message: "Get seller dashboard data", data: {totalProduct, totalSold, totalRevenue, withdrawAmount, totalProfitGrowth, profit, loss}}, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}