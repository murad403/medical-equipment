import { Types } from "mongoose";

type TPayment = {
    amount: number;
    sellerId: Types.ObjectId;
    customerId: Types.ObjectId;
    productId: Types.ObjectId;
    bidId: Types.ObjectId;
    transaction_id: string;
    status: "success" | "failed" | "reject";
}

export default TPayment;