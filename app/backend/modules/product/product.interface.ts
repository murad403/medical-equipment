import { Types } from "mongoose";

export type TImages = {
    id: string;
    image: string;
}
export type TUploadProduct = {
    sellerId: Types.ObjectId;
    title: string;
    bidDate: string;
    category: string;
    price: number,
    description: string;
    location: string;
    images: TImages[],
    bids: number
}