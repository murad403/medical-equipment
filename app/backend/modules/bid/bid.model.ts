import mongoose, { model, Schema } from "mongoose";
import TBid from "./bid.interface";

const bidSchema = new Schema<TBid>({
    customerId: {type: Schema.Types.ObjectId, required: true},
    productId: {type: Schema.Types.ObjectId, required: true},
    status: {type: String, enum: ["pending", "progress","complete", "rejected", "win"], required: true, default: "pending"},
    bidPrice: {type: Number, required: true}
}, {
    timestamps: true
})

const Bid = mongoose.models.Bid || model<TBid>("Bid", bidSchema);
export default Bid;