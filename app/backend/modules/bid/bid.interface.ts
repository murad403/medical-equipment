import { Types } from "mongoose";

type TBid = {
    customerId: Types.ObjectId;
    productId: Types.ObjectId;
    sellerId: Types.ObjectId;
    status: "pending" | "progress" | "complete" | "cancel" | "win" | "placed";
    bidPrice: number;
    isDeleted: boolean;
    orderNumber: number;
    payment: "pending" | "success" | "failed" | "reject";
}

export default TBid;