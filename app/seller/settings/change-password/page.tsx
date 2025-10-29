"use client";
import ProtectedRoute from "@/app/hooks/ProtectedRoute";
import { useChangePasswordMutation } from "@/app/redux/api/api";
import NavigateButton from "@/app/shared/NavigateButton";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";

type TInputs = {
    password: string;
    newPassword: string;
    confirmPassword: string;
}

const page = () => {
    const [changePassword, { isLoading }] = useChangePasswordMutation();
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<TInputs>();

    const onSubmit: SubmitHandler<TInputs> = async(data) => {
        if (data?.newPassword !== data?.confirmPassword) {
            toast.error("New password and confirm new password don't match");
            return;
        }
        const newData = {
            oldPassword: data?.password,
            newPassword: data?.newPassword
        }
        try {
            const result = await changePassword(newData).unwrap();
            toast.success(result?.message);
            reset();
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message);
        }
    }
    return (
        <ProtectedRoute>
            <NavigateButton text={"Change password"}></NavigateButton>
            <div className="flex justify-center items-center w-full mt-5">
                <div className="bg-white shadow-xl py-7 md:py-20 mx-4 md:mx-0 px-4 w-full md:w-[90%] flex flex-col items-center justify-center text-title rounded-lg">
                    <form className="w-full md:w-1/2 space-y-3 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Update Password</h1>
                        <div className="text-[15px] relative">
                            <label className="block mb-1">Enter old password</label>
                            <input placeholder="Enter Old Password" className="appearance-none w-full outline-none border border-title rounded-lg py-2 px-4" type={showPassword ? "text" : "password"} {...register("password", { required: true })} />
                            <p className="absolute right-2 top-10" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <PiEyeLight /> : <PiEyeSlash />
                                }
                            </p>
                            {errors.password && <span className="text-sm text-red-500">Password is required</span>}
                        </div>
                        <div className="text-[15px] relative">
                            <label className="block mb-1">New password</label>
                            <input placeholder="Enter New Password" className="appearance-none w-full outline-none border border-title rounded-lg py-2 px-4" type={showNewPassword ? "text" : "password"} {...register("newPassword", { required: true })} />
                            <p className="absolute right-2 top-10" onClick={() => setShowNewPassword(!showNewPassword)}>
                                {
                                    showNewPassword ? <PiEyeLight /> : <PiEyeSlash />
                                }
                            </p>
                            {errors.newPassword && <span className="text-sm text-red-500">New password is required</span>}
                        </div>
                        <div className="text-[15px] relative">
                            <label className="block mb-1">New password</label>
                            <input placeholder="Confirm New Password" className="appearance-none w-full outline-none border border-title rounded-lg py-2 px-4" type={showConfirmPassword ? "text" : "password"} {...register("confirmPassword", { required: true })} />
                            <p className="absolute right-2 top-10" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {
                                    showConfirmPassword ? <PiEyeLight /> : <PiEyeSlash />
                                }
                            </p>
                            {errors.confirmPassword && <span className="text-sm text-red-500">Confirm password is required</span>}
                        </div>
                        <button className="w-full bg-hard rounded-lg text-white py-2 cursor-pointer">
                            {
                                isLoading ? <span className="loading loading-spinner text-white"></span> : <p>Update Password</p>
                            }
                        </button>
                    </form>
                </div>
            </div>
        </ProtectedRoute>
    )
}

export default page;