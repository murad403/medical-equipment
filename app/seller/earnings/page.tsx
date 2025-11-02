"use client";
import NavigateButton from "@/app/shared/NavigateButton";
import TransactionModal from "../seller-component/earnings/TransactionModal";
import ProtectedRoute from "@/app/hooks/ProtectedRoute";
import { useGetEarningsQuery } from "@/app/redux/api/api";
import LoadingSpinner from "@/app/shared/LoadingSpinner";
import { SlEye } from "react-icons/sl";
import Image from "next/image";
import { useState } from "react";

const page = () => {
    const [id, setId] = useState<string>("")
    const { data, isLoading } = useGetEarningsQuery(undefined);
    const payments = data?.data;
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    // console.log(payments);
    return (
        <ProtectedRoute>
            <NavigateButton text={"earnings"}></NavigateButton>
            <div className="overflow-x-auto md:mt-4 mt-3 rounded-lg border border-hard">
                <table className="table">
                    <thead className="">
                        <tr className="bg-hard text-[14px] text-white">
                            <td>#SL</td>
                            <td>User Name</td>
                            <td>Transaction Id</td>
                            <td>Product Name</td>
                            <td>Product Price</td>
                            <td>Bid Price</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody className="space-y-3">
                        {
                            payments?.map((payment: any, index: number) =>
                                <tr key={payment?._id} className="border-b border-hard text-title">
                                    <th>{index + 1}</th>
                                    <td className="flex items-center gap-1">
                                        <Image className="md:size-10 size-8 rounded-full" src={payment?.customerId?.photo || "image"} width={500} height={500} alt="user photo"></Image>
                                        <p>{payment?.customerId?.name}</p>
                                    </td>
                                    <td>{payment?.transaction_id}</td>
                                    <td>{payment?.productId?.title}</td>
                                    <td>${payment?.productId?.price}</td>
                                    <td>${payment?.amount}</td>
                                    <td className="pl-8">
                                        <button onClick={() => {(document.getElementById('my_modal_3') as HTMLDialogElement).showModal(), setId(payment?._id)}} className="cursor-pointer">
                                            <SlEye size={17} />
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <TransactionModal id={id}></TransactionModal>
            </div>
        </ProtectedRoute>
    )
}

export default page;