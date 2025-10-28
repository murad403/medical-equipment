import mongoose, { model, Schema } from "mongoose";
import TBid from "./bid.interface";

const bidSchema = new Schema<TBid>({
    customerId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"},
    sellerId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"},
    productId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Product"},
    status: {type: String, enum: ["pending", "progress","complete", "rejected", "win"], required: true, default: "pending"},
    bidPrice: {type: Number, required: true},
    isDeleted: {type: Boolean, required: true},
    orderNumber: {type: Number, unique: true, required: true}
}, {
    timestamps: true
})

const Bid = mongoose.models.Bid || model<TBid>("Bid", bidSchema);
export default Bid;