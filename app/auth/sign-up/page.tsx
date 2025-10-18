"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { PiEyeSlash, PiEyeLight } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

type TInputs = {
    name: string;
    role: string;
    phoneNumber: string;
    email: string;
    address: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
}

const page = () => {
    const [phone, setPhone] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const {register, handleSubmit, watch, formState: {errors}} = useForm<TInputs>();
    const onSubmit: SubmitHandler<TInputs> = (data) =>{
        if(data.password !== data.confirmPassword){
            return toast.error("Password and Confirm Password do not match");
        }
        axios.post('/api/auth/sign-up', {...data, phoneNumber: phone})
        .then(result =>{
            // console.log(result.data);
            toast.success(result.data.message);
        })
        .catch(error =>{
            console.log(error.response.data.message);
            toast.error(error.response.data.message);
        })
        // console.log(data, typeof parseNumber);
    }
    return (
        <div className="pt-5 text-title">
            <div className="text-center">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl"><span className="text-hard">Sign Up</span> Email</h2>
                <p className="text-sm mt-2">Welcome Back! Please enter your details.</p>
            </div>
            <div className="flex justify-center w-full mt-5">
                <div className="bg-normal py-7 mx-4 md:mx-0 px-4 w-full md:w-[40%] flex flex-col items-center rounded-lg">
                    <Image className="md:w-[200px] w-[100px]" src={logo} alt="logo"></Image>
                    <form className="w-full space-y-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="text-[15px]">
                            <label className="block mb-1">Name</label>
                            <input placeholder="Enter Name" className="appearance-none w-full outline-none border border-hard rounded-lg py-2 px-4" type="text" {...register("name", {required: true})} />
                            {errors.name && <span className="text-sm text-red-500">Name is required</span>}
                        </div>
                        <div className="text-[15px]">
                            <label className="block mb-1">Set Your Role</label>
                            <select className="appearance-none w-full outline-none border border-hard rounded-lg py-2 px-4" {...register("role")}>
                                <option value="" defaultChecked>Set Your Role</option>
                                <option value="user">User</option>
                                <option value="seller">Seller</option>
                            </select>
                            {errors.role && <span className="text-sm text-red-500">Role is required</span>}
                        </div>
                        <div className="text-[15px] w-full">
                            <label className="block mb-1">Phone Number</label>
                            <PhoneInput containerStyle={{ width: "100%"}} inputStyle={{width: "100%", border: "1px solid #48B1DB", outline: "none" , backgroundColor: "#eef9fe", paddingTop: "8px", paddingBottom: "8px", borderRadius: "8px"}} country={"eg"} enableSearch={true} value={phone} onChange={(phone) => setPhone(phone)}/>
                            {errors.phoneNumber && <span className="text-sm text-red-500">Phone Number is required</span>}
                        </div>
                        <div className="text-[15px]">
                            <label className="block mb-1">Email</label>
                            <input placeholder="Enter Email" className="appearance-none w-full outline-none border border-hard rounded-lg py-2 px-4" type="email" {...register("email", {required: true})} />
                            {errors.email && <span className="text-sm text-red-500">Email is required</span>}
                        </div>
                        <div className="text-[15px]">
                            <label className="block mb-1">Address</label>
                            <input placeholder="Enter Address" className="appearance-none w-full outline-none border border-hard rounded-lg py-2 px-4" type="text" {...register("address", {required: true})} />
                            {errors.address && <span className="text-sm text-red-500">Address is required</span>}
                        </div>
                        <div className="text-[15px] relative">
                            <label className="block mb-1">Password</label>
                            <input placeholder="Enter Password" className="appearance-none w-full outline-none border border-hard rounded-lg py-2 px-4" type={showPassword ? "text" : "password"} {...register("password", {required: true})} />
                            <p className="absolute right-2 top-10" onClick={() =>setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <PiEyeLight/> : <PiEyeSlash/>
                                }
                            </p>
                            {errors.password && <span className="text-sm text-red-500">Password is required</span>}
                        </div>
                        <div className="text-[15px] relative">
                            <label className="block mb-1">Confirm Password</label>
                            <input placeholder="Enter Confirm Password" className="appearance-none w-full outline-none border border-hard rounded-lg py-2 px-4" type={showPassword ? "text" : "password"} {...register("confirmPassword", {required: true})} />
                            {errors.confirmPassword && <span className="text-sm text-red-500">Confirm Password is required</span>}
                        </div>
                        <button className="w-full bg-hard rounded-lg text-white  py-2 mt-3 cursor-pointer">Sign Up</button>
                        <div className="mt-3">
                            <input type="checkbox" {...register("terms", {required: true})}/>
                            <label className="text-sm ml-2">By creating an account, I accept the Terms & Conditions & Privacy Policy.</label>
                        </div>
                    </form>
                    <p className="mt-4">Already have an account? <Link href={"/auth/sign-in"} className="text-hard">Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default page; 