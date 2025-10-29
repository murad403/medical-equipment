"use client";
import { useAddBidMutation } from "@/app/redux/api/api";
import { useAppSelector } from "@/app/redux/hook";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const BidsModal = ({ currentProduct, time }: { currentProduct: any, time: string }) => {
  const { user } = useAppSelector((state: any) => state.user);
  const [addBid, {isLoading}] = useAddBidMutation();
  const [bid, setBid] = useState<number>(0);
  const [confirmBid, setConfirmBid] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(true);
  const handleReviewBid = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEdit(false);
  }
  // console.log(currentProduct?.sellerId?._id);
  const handleConfirmBid = async() => {
    const newBid = {
      customerId: user?._id,
      productId: currentProduct?._id,
      sellerId: currentProduct?.sellerId?._id,
      bidPrice: bid,
      status: "placed",
      isDeleted: false,
      payment: "pending"
    }
      try {
        const result = await addBid(newBid).unwrap();
        toast.success(result?.message);
        setConfirmBid(true);
      } catch (error: any) {
        console.log(error);
        toast.error(error?.data?.message);
      }
  }
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white">
          <form method="dialog">
            <button className="text-title cursor-pointer border border-title rounded-full px-1 hover:bg-gray-300 absolute right-2 top-2">
              ✕
            </button>
          </form>
          {
            user ? <div>
              {
                edit ?
              <div>
                <h3 className="font-bold text-lg text-title">Place a bid</h3>
                <p className="text-sm mt-1 text-gray-700">Current bid  ${currentProduct?.price}</p>
                <p className="text-[13px] text-red-500 mt-1">{time}</p>
                <form onSubmit={handleReviewBid} className="my-3 w-full">
                  <div>
                    <label className="block capitalize text-sm text-title">Your max bid</label>
                    <div className="flex items-center gap-2">
                      <input onChange={(e) => setBid(Number(e.target.value))} defaultValue={bid} required name="bid" type="text" placeholder="$" className="w-full text-hard px-3 outline-none border border-hard rounded-md py-2" />
                      <button type="submit" disabled={bid < currentProduct?.price} className={`bg-hard whitespace-nowrap text-white font-semibold rounded-md py-3 px-3 text-sm ${bid <= currentProduct?.price ? "cursor-not-allowed" : "cursor-pointer"}`}>Review Bid</button>
                    </div>
                  </div>
                </form>
                <p className="text-[13px] text-gray-700">Enter &{currentProduct?.price}.5 or more</p>
              </div> :
              confirmBid ?
                <div className="flex justify-center items-center flex-col gap-3 h-[150px] text-title">
                  <h2 className="text-3xl font-semibold">Thank You</h2>
                  <p className="text-sm">Your bid has been successfully submitted</p>
                </div>
                :
                <div className="flex flex-col items-center">
                  <h3 className="font-bold text-lg text-title">Review bid</h3>
                  <p className="text-sm mt-1 flex items-center gap-7 text-title">Current bid <span>${currentProduct?.price}</span></p>
                  <p className="text-sm mt-1 flex items-center gap-7 text-title">Your max bid <span>${bid}</span></p>
                  <p className="text-[13px] text-red-500 mt-1">{time}</p>
                  <div className="mt-5 flex justify-between items-center gap-5 text-sm font-semibold *:cursor-pointer">
                    <button onClick={handleConfirmBid} className="text-white bg-hard rounded-md py-2 px-3">Confirm Bid</button>
                    <button onClick={() => setEdit(true)} className="text-hard border border-hard rounded-md py-2 px-8">Edit</button>
                  </div>
                  <p className="text-[10px] text-red-500 mt-5">When you confirm your bid, it means you’re committing to buy this item if you’re the winning bidder.</p>
                </div>
              }
            </div> : <div className="flex flex-col justify-center items-center gap-3">
              <h3 className="text-title text-lg font-semibold">Please Login First</h3>
              <Link className="text-red-400 underline underline-offset-3" href={"/auth/sign-in"}>Login...</Link>
            </div>
          }
        </div>
      </dialog>
    </div>
  );
};

export default BidsModal;
