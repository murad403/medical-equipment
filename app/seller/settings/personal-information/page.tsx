"use client";
import NavigateButton from "@/app/shared/NavigateButton";
import Image from "next/image";
import userPhoto from "../../../../public/user.jpg";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdOutlineModeEdit } from "react-icons/md";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import ProtectedRoute from "@/app/hooks/ProtectedRoute";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { useSellerProfileUpdateMutation } from "@/app/redux/api/api";
import toast from "react-hot-toast";
import { addUser } from "@/app/redux/features/userSlice";

type TInputs = {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    bankAccountName: string;
    bankAccountNumber: string;
}
const page = () => {
    const {user} = useAppSelector((state: any) => state?.user);
    const [editProfile, setEditProfile] = useState(false);
    const [sellerProfileUpdate, {isLoading}] = useSellerProfileUpdateMutation();
    const { register, handleSubmit, reset } = useForm<TInputs>();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<TInputs> = async(data) => {
        const updatedDoc = {
            name: data?.name || user?.name,
            email: data?.email || user?.email,
            phoneNumber: data?.phoneNumber || user?.phoneNumber,
            address: data?.address || user?.address,
            bankAccountName: data?.bankAccountName || user?.bankAccountName,
            bankAccountNumber: data?.bankAccountNumber || user?.bankAccountNumber
        }
        try {
            const result = await sellerProfileUpdate(updatedDoc).unwrap();
            toast.success(result?.message);
            dispatch(addUser(result?.data));
            reset();
            // console.log(result?.data);
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message);
        }
    }
    // console.log(editProfile);
    return (
        <ProtectedRoute>
            <div className="text-title">
                <NavigateButton text={"personal information"}></NavigateButton>
                <div className="bg-white py-3 md:py-5 lg:py-10 px-3 md:px-32 lg:px-52 shadow-xl mt-3 md:mt-7 rounded-lg">
                    <div className="flex items-center gap-3 md:gap-5">
                        <div className="md:w-32 w-24 md:h-32 h-24 relative">
                            <Image className="w-full h-full rounded-full" src={user?.photo || userPhoto} alt={`seller photo`} width={500} height={500}></Image>
                            {/* <button className="absolute right-0 bottom-5 bg-hard text-white p-[2px] rounded-full"><CiEdit size={24} /></button> */}
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
                                <input defaultValue={user?.name} className="appearance-none w-full outline-none border border-gray-400 rounded-md py-2 px-4" type="text" {...register("name")} />
                            </div>
                            <div className="text-[15px] md:text-xl w-full">
                                <label className="block mb-1 font-semibold">Email</label>
                                <input defaultValue={user?.email} className="appearance-none w-full outline-none border border-gray-400 rounded-md py-2 px-4" type="email" {...register("email")} />
                            </div>
                            <div className="text-[15px] md:text-xl w-full">
                                <label className="block mb-1 font-semibold">Phone Number</label>
                                <input defaultValue={user?.phoneNumber} className="appearance-none w-full outline-none border border-gray-400 rounded-md py-2 px-4" type="number" {...register("phoneNumber")} />
                            </div>
                            <div className="text-[15px] md:text-xl w-full">
                                <label className="block mb-1 font-semibold">Address</label>
                                <input defaultValue={user?.address} className="appearance-none w-full outline-none border border-gray-400 rounded-md py-2 px-4" type="text" {...register("address")} />
                            </div>
                            <div onClick={() => setEditProfile(true)} className={`w-full mt-2 flex justify-center items-center bg-hard rounded-md text-white py-2 cursor-pointer gap-2 ${editProfile ? "hidden" : "block"}`}>
                                <MdOutlineModeEdit size={20} className="bg-white p-[2px] rounded-full text-red-500" />
                                <span className="text-white">Edit profile</span>
                            </div>
                            {
                                editProfile &&
                                <div className="space-y-1 md:space-y-2">
                                    <div className="text-[15px] md:text-xl w-full">
                                        <label className="block mb-1 font-semibold">Seller bank account name</label>
                                        <input defaultValue={user?.bankAccountName} className="appearance-none w-full outline-none border border-gray-400 rounded-md py-2 px-4" type="text" {...register("bankAccountName")} />
                                    </div>
                                    <div className="text-[15px] md:text-xl w-full">
                                        <label className="block mb-1 font-semibold">Bank account number</label>
                                        <input defaultValue={user?.bankAccountNumber} className="appearance-none w-full outline-none border border-gray-400 rounded-md py-2 px-4" type="text" {...register("bankAccountNumber")} />
                                    </div>
                                    <button className={`w-full flex justify-center items-center bg-hard rounded-md text-white py-2 cursor-pointer font-semibold mt-2`}>
                                        {
                                            isLoading ? <span className="loading loading-spinner text-white"></span> : <p>save & change</p>
                                        }
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