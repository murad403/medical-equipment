import mongoose, { model, Schema } from "mongoose";
import { TImages, TUploadProduct } from "./product.interface";

const imageSchema = new Schema<TImages>({
    id: {type: String},
    image: {type: String}
})

const productSchema = new Schema<TUploadProduct>({
    sellerId: {type: Schema.Types.ObjectId, required: true, ref: "User"},
    title : {type: String, required: true},
    // bidTime : {type: String, required: true},
    bidDate : {type: String, required: true},
    category : {type: String, required: true},
    price : {type: Number, required: true},
    description : {type: String, required: true},
    location : {type: String, required: true},
    images: {type: [imageSchema], required: true}
}, {
    timestamps: true
})

const Product = mongoose.models.Products || model<TUploadProduct>("Product", productSchema);
export default Product;