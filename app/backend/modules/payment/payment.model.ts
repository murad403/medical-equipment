import mongoose, { model, Schema } from "mongoose";
import TPayment from "./payment.interface";


const paymentSchema = new Schema<TPayment>({
    amount: {type: Number, required: true},
    sellerId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"},
    customerId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"},
    productId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Product"},
    bidId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Bid"},
    transaction_id: {type: String},
    status: {type: String, enum: ["success" , "failed" , "reject"]}
}, {
    timestamps: true
})

const Payment = mongoose.models.Payment || model<TPayment>("Payment", paymentSchema);
export default Payment;
