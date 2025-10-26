import { Types } from "mongoose";

type TBid = {
    customerId: Types.ObjectId;
    productId: Types.ObjectId;
    status: "pending" | "progress" | "complete" | "rejected" | "win";
    bidPrice: number;
    isDeleted: boolean;
    orderNumber: number;
}

export default TBid;