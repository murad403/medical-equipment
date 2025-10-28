"use client";
import ProtectedRoute from "@/app/hooks/ProtectedRoute";
import { useGetAllBidderQuery } from "@/app/redux/api/api";
import LoadingSpinner from "@/app/shared/LoadingSpinner";
import NavigateButton from "@/app/shared/NavigateButton";
import BidderList from "../../seller-component/product/BidderList";

const page = () => {
  const { data, isLoading } = useGetAllBidderQuery(undefined);
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <ProtectedRoute>
      <div className="flex items-center gap-3">
        <NavigateButton text={"bidder list"}></NavigateButton>
        <h3 className="text-2xl font-bold text-hard">({data?.data?.length})</h3>
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
            {
              data?.data?.map((bid: any, index: number) => <BidderList key={bid?._id} index={index} bid={bid}></BidderList>)
            }
          </tbody>
        </table>
      </div>
    </ProtectedRoute>
  )
}

export default page;