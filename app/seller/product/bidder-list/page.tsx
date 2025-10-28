"use client";
import ProtectedRoute from "@/app/hooks/ProtectedRoute";
import { useGetAllBidderQuery } from "@/app/redux/api/api";
import NavigateButton from "@/app/shared/NavigateButton";
import { SlEye } from "react-icons/sl";

const page = () =>{
  const {data, isLoading} = useGetAllBidderQuery(undefined);
  console.log(data?.data);
    return (
        <ProtectedRoute>
            <div className="flex items-center gap-3">
                <NavigateButton text={"bidder list"}></NavigateButton>
                <h3 className="text-2xl font-bold text-hard">(30)</h3>
            </div>
            <div className="overflow-x-auto md:mt-4 mt-3 rounded-lg border border-hard">
                    <table className="table">
                      <thead className="">
                        <tr className="bg-hard text-[14px] text-white">
                          <td>#SL</td>
                          <td>Bidder Name</td>
                          <td>Product Name</td>
                          <td>Category</td>
                          <td>Bid Price</td>
                          <td>Bid Time & Date</td>
                          <td>Actions</td>
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
                            <button className="cursor-pointer">
                                <SlEye size={17}/>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
        </ProtectedRoute>
    )
}

export default page;