"use client";
import NavigateButton from "@/app/shared/NavigateButton";
import Image from "next/image";
import React from "react";
import ProtectedRoute from "@/app/hooks/ProtectedRoute";
import LoadingSpinner from "@/app/shared/LoadingSpinner";
import { useAddSellerBidStatusMutation, useGetAllBidderQuery } from "@/app/redux/api/api";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import getDateAndTime from "@/app/utils/getDateAndTime";

const page = () => {
  const {userId} = useParams();
  const [addSellerBidStatus, {isLoading: sendingProductLoading}] = useAddSellerBidStatusMutation();
  const {data, isLoading} = useGetAllBidderQuery(undefined);
  if(isLoading){
    return <LoadingSpinner></LoadingSpinner>
  }
  const currentOrder = data?.data?.find((bid: any) => bid?._id === userId);
  const createdAt = currentOrder?.createdAt;
  const {date, time} = getDateAndTime(createdAt);
  // console.log(userId, currentOrder);
  const handleSendingProduct = async() =>{
    try {
      await addSellerBidStatus({id: userId, payload: {status: "progress"}}).unwrap();
      toast.success("Sending product successfully!");
    } catch (error: any) {
      console.log(error);
      toast.success("Sending product error");
    }
  }
  const handleDeliveryProduct = async() =>{
    try {
      await addSellerBidStatus({id: userId, payload: {status: "complete"}}).unwrap();
      toast.success("Delivery product successfully!");
    } catch (error: any) {
      console.log(error);
      toast.success("Delivery product error");
    }
  }
  return (
    <ProtectedRoute>
      <NavigateButton text={"user order details"}></NavigateButton>
      <div className="flex justify-center mt-3 md:mt-4 text-title">
        <div className="w-full md:w-[80%]">
        <div className="flex items-center gap-4">
          <Image
          width={500}
          height={500}
            className="w-[90px] h-[90px] rounded-full"
            src={currentOrder?.customerId?.photo}
            alt={currentOrder?.customerId?.name}
          ></Image>
          <h3 className="font-medium text-xl capitalize">{currentOrder?.customerId?.name}</h3>
        </div>
        <div className="*:flex *:justify-between *:items-center *:md:py-3 *:py-2 *:border-b-2 *:border-blue-200">
          <div>
            <h3 className="font-medium md:text-lg text-[16px]">Name</h3>
            <p className="md:text-[15px] text-[13px]">{currentOrder?.customerId?.name}</p>
          </div>
          <div>
            <h3 className="font-medium md:text-lg text-[16px]">Email</h3>
            <p className="md:text-[15px] text-[13px]">{currentOrder?.customerId?.email}</p>
          </div>
          <div>
            <h3 className="font-medium md:text-lg text-[16px]">Phone Number</h3>
            <p className="md:text-[15px] text-[13px]">{currentOrder?.customerId?.phoneNumber}</p>
          </div>
          <div>
            <h3 className="font-medium md:text-lg text-[16px]">Product Name</h3>
            <p className="md:text-[15px] text-[13px]">{currentOrder?.productId?.title}</p>
          </div>
          <div>
            <h3 className="font-medium md:text-lg text-[16px]">Bid Price</h3>
            <p className="md:text-[15px] text-[13px]">${currentOrder?.bidPrice}</p>
          </div>
          <div>
            <h3 className="font-medium md:text-lg text-[16px]">Bid Time & Date</h3>
            <p className="md:text-[15px] text-[13px]">{date}, {time}</p>
          </div>
          <div>
            <h3 className="font-medium md:text-lg text-[16px]">Location</h3>
            <p className="md:text-[15px] text-[13px]">{currentOrder?.customerId?.address}</p>
          </div>

        </div>
        <div className="flex justify-end items-center md:mt-5 mt-3">
            {
              currentOrder?.status === "pending" ?
              <button onClick={handleSendingProduct} className="bg-hard font-semibold text-white py-2 px-5 rounded-xl cursor-pointer">
                {
                  sendingProductLoading ? <span className="loading loading-spinner text-white"></span>:
                  <p>Sending Product</p>
                }
                </button> :
              currentOrder?.status === "progress" ? <button onClick={handleDeliveryProduct} className="bg-hard text-white font-semibold py-2 px-5 rounded-xl cursor-pointer">
                {
                  
                  sendingProductLoading ? <span className="loading loading-spinner text-white"></span>:
                  <p>Delivery Now</p>
                
                }
              </button> : <p className="font-semibold text-hard bg-normal py-2 px-5 rounded-xl">Delivery complete</p>
            }
        </div>
      </div>
      </div>
    </ProtectedRoute>
  );
};

export default page;
