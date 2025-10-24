"use client";
import NavigateButton from "@/app/shared/NavigateButton";
import { SlEye } from "react-icons/sl";
import TransactionModal from "../seller-component/earnings/TransactionModal";
import ProtectedRoute from "@/app/hooks/ProtectedRoute";

const page = () => {
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
                            <td>Bid Price</td>
                            <td>Price</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody className="space-y-3">
                        <tr className="border-b border-hard text-title">
                            <th>1</th>
                            <td>murad</td>
                            <td>Control Specialist</td>
                            <td>10</td>
                            <td>Czech </td>
                            <td>9/29/2020</td>
                            <td className="pl-8">
                                <button onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement).showModal()} className="cursor-pointer">
                                    <SlEye size={17} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <TransactionModal></TransactionModal>
            </div>
        </ProtectedRoute>
    )
}

export default page;