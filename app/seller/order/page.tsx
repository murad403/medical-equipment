"use client";
import ProtectedRoute from "@/app/hooks/ProtectedRoute";
import { useGetAllBidderQuery } from "@/app/redux/api/api";
import LoadingSpinner from "@/app/shared/LoadingSpinner";
import NavigateButton from "@/app/shared/NavigateButton";
import OrderList from "../seller-component/order/OrderList";

const page = () => {
  const { data, isLoading } = useGetAllBidderQuery(undefined);
  const orderList = data?.data?.filter((order: any) => (order?.status !== "placed") && (order?.status !== "win"));
  // console.log(orderList);
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <ProtectedRoute>
      <NavigateButton text={"user order list"}></NavigateButton>

      {
        orderList?.length <= 0 ? <p className="text-red-500 text-center">No orders found!!!</p> :
          <div className="overflow-x-auto md:mt-4 mt-3 rounded-lg border border-hard">
            <table className="table">

              <thead className="">
                <tr className="bg-hard text-[14px] text-white">
                  <td>#SL</td>
                  <td>Bidder Name</td>
                  <td>Email</td>
                  <td>Product Name</td>
                  <td>Bid Price</td>
                  <td>Bid Time & Date</td>
                  <td>Status</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody className="space-y-3">
                {
                  orderList?.map((bid: any, index: number) => <OrderList key={bid?._id} bid={bid} index={index}></OrderList>)
                }
              </tbody>
            </table>
          </div>
      }

    </ProtectedRoute>
  );
};

export default page;
