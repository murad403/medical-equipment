"use client";
import NavigateButton from "@/app/shared/NavigateButton";
import Image from "next/image";
import user from "../../../../public/user.jpg";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdOutlineModeEdit } from "react-icons/md";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import ProtectedRoute from "@/app/hooks/ProtectedRoute";
import { useAppSelector } from "@/app/redux/hook";

type TInputs = {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    bankAccountName: string;
    bankAccountNumber: number;
}
const page = () => {
    const {user} = useAppSelector((state: any) => state?.user);
    const [editProfile, setEditProfile] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<TInputs>();
    const onSubmit: SubmitHandler<TInputs> = (data) => {
        console.log(data);
    }
    // console.log(editProfile);
    return (
        <ProtectedRoute>
            <div className="text-title">
                <NavigateButton text={"personal information"}></NavigateButton>
                <div className="bg-white py-3 md:py-5 lg:py-10 px-3 md:px-32 lg:px-52 shadow-xl mt-3 md:mt-7 rounded-lg">
                    <div className="flex items-center gap-3 md:gap-5">
                        <div className="md:w-32 w-24 md:h-32 h-24 relative">
                            <Image className="w-full h-full rounded-full" src={user?.photo} alt={`${user?.name}`} width={500} height={500}></Image>
                            <button className="absolute right-0 bottom-5 bg-hard text-white p-[2px] rounded-full"><CiEdit size={24} /></button>
                        </div>
                        <div className="capitalize">
                            <h3 className="text-xl md:text-3xl lg:text-4xl">{user?.name}</h3>
                            <p className="capitalize text-[15px] md:text-xl">{user?.role}</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <form className="w-full space-y-1 md:space-y-2" onSubmit={handleSubmit(onSubmit)}>
                            <div className="text-[15px] md:text-xl w-full">
                                <label className="block mb-1 font-semibold">Full Name</label>
                                <input className="appearance-none w-full outline-none border border-gray-400 rounded-md py-2 px-4" type="text" {...register("name", { required: true })} />
                                {errors.name && <span className="text-sm text-red-500">Name is required</span>}
                            </div>
                            <div className="text-[15px] md:text-xl w-full">
                                <label className="block mb-1 font-semibold">Email</label>
                                <input className="appearance-none w-full outline-none border border-gray-400 rounded-md py-2 px-4" type="email" {...register("email", { required: true })} />
                                {errors.email && <span className="text-sm text-red-500">Email is required</span>}
                            </div>
                            <div className="text-[15px] md:text-xl w-full">
                                <label className="block mb-1 font-semibold">Phone Number</label>
                                <input className="appearance-none w-full outline-none border border-gray-400 rounded-md py-2 px-4" type="number" {...register("phoneNumber", { required: true })} />
                                {errors.phoneNumber && <span className="text-sm text-red-500">Phone number is required</span>}
                            </div>
                            <div className="text-[15px] md:text-xl w-full">
                                <label className="block mb-1 font-semibold">Address</label>
                                <input className="appearance-none w-full outline-none border border-gray-400 rounded-md py-2 px-4" type="text" {...register("address", { required: true })} />
                                {errors.address && <span className="text-sm text-red-500">address number is required</span>}
                            </div>
                            <div onClick={() => setEditProfile(true)} className={`w-full flex justify-center items-center bg-hard rounded-md text-white py-2 cursor-pointer gap-2 ${editProfile ? "hidden" : "block"}`}>
                                <MdOutlineModeEdit size={20} className="bg-white p-[2px] rounded-full text-red-500" />
                                <span className="text-white">Edit profile</span>
                            </div>
                            {
                                editProfile &&
                                <div className="space-y-1 md:space-y-2">
                                    <div className="text-[15px] md:text-xl w-full">
                                        <label className="block mb-1 font-semibold">Seller bank account name</label>
                                        <input className="appearance-none w-full outline-none border border-gray-400 rounded-md py-2 px-4" type="text" {...register("bankAccountName", { required: true })} />
                                        {errors.bankAccountName && <span className="text-sm text-red-500">Account number is required</span>}
                                    </div>
                                    <div className="text-[15px] md:text-xl w-full">
                                        <label className="block mb-1 font-semibold">Bank account number</label>
                                        <input className="appearance-none w-full outline-none border border-gray-400 rounded-md py-2 px-4" type="number" {...register("bankAccountNumber", { required: true })} />
                                        {errors.bankAccountNumber && <span className="text-sm text-red-500">Account number is required</span>}
                                    </div>
                                    <button className={`w-full flex justify-center items-center bg-hard rounded-md text-white py-2 cursor-pointer font-semibold`}>
                                        save & change
                                    </button>
                                </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    )
}

export default page;