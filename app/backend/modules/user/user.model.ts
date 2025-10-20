import mongoose, { model, Schema } from "mongoose";
import TUser from "./user.interface";

const userSchema = new Schema<TUser>({
    name: {type: String, required: true},
    role: {type: String, required: true, enum: ["user", "seller"]},
    phoneNumber: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    address: {type: String, required: true},
    password: {type: String, required: true},
    photo: {type: String, required: true, default: "https://ibb.co.com/jPvsf68T"}
}, {
    timestamps: true
})

const User = mongoose.models.User || model<TUser>("User", userSchema);

export default User;