"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { PiEyeSlash, PiEyeLight } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

type TInputs = {
    email: string;
    password: string;
    remember: boolean;
}

const page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {register, handleSubmit, watch, formState: {errors}} = useForm<TInputs>();
    const onSubmit: SubmitHandler<TInputs> = (data) =>{
        // console.log(data);
        axios.post('/api/auth/sign-in', data)
        .then(result =>{
            // console.log(result.data);
            toast.success(result.data.message);
        })
        .catch(error =>{
            console.log(error.response.data.message);
            toast.error(error.response.data.message);
        })
    }
    return (
        <div className="min-h-screen flex justify-center items-center flex-col text-title">
            <div className="text-center">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl"><span className="text-hard">Sign In</span> To Your Account</h2>
                <p className="text-sm mt-2">Welcome! Sign in to your account to continue.</p>
            </div>
            <div className="flex justify-center w-full mt-5">
                <div className="bg-normal py-7 mx-4 md:mx-0 px-4 w-full md:w-[40%] flex flex-col items-center rounded-lg">
                    <Image className="md:w-[200px] w-[100px]" src={logo} alt="logo"></Image>
                    <form className="w-full space-y-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="text-[15px]">
                            <label className="block mb-1">Email</label>
                            <input placeholder="Enter Email" className="appearance-none w-full outline-none border border-hard rounded-lg py-2 px-4" type="email" {...register("email", {required: true})} />
                            {errors.email && <span className="text-sm text-red-500">Email is required</span>}
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
                        <div>
                            <input type="checkbox" {...register("remember", {required: true})}/>
                            <label className="text-sm ml-2">Remember me</label>
                        </div>
                        <button className="w-full bg-hard rounded-lg text-white cursor-pointer py-2">Sign In</button>
                    </form>
                    <div className="flex justify-center items-center gap-5 md:gap-7 flex-col mt-5 md:mt-7 w-full">
                        <p>or</p>
                        <p>Sign In With</p>
                        <button className="flex items-center justify-center text-hard gap-3 py-2 border border-hard rounded-lg w-full">
                            <FaGoogle/>
                            <p>Google</p>
                        </button>
                        <p>Don’t have an account? <Link href={"/auth/sign-up"} className="text-hard">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;