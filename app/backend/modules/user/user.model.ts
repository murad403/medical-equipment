import mongoose, { model, Schema } from "mongoose";
import TUser from "./user.interface";

const userSchema = new Schema<TUser>({
    name: {type: String, required: true},
    role: {type: String, required: true, enum: ["user", "seller"]},
    phoneNumber: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    address: {type: String, required: true},
    password: {type: String, required: true},
    photo: {type: String, required: true, default: "http://res.cloudinary.com/dyk7onoeo/image/upload/v1762075295/wr50jley4samo16vcckx.png"},
    bankAccountName: {type: String, default: "not provided"},
    bankAccountNumber: {type: String, default: "not provided"},
    withdrawAmount: {type: Number, default: 0}
}, {
    timestamps: true
})

const User = mongoose.models.User || model<TUser>("User", userSchema);

export default User;