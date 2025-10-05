"use client";
import React, { useState } from "react";

const BidsModal = () => {
  const [bid, setBid] = useState<number>();
  const [confirmBid, setConfirmBid] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(true);
  const handleReviewBid = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const bid = new FormData(e.currentTarget).get("bid") as string;
    setBid(parseInt(bid));
    setEdit(false);
  }
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {
            edit ? 
            <div>
              <h3 className="font-bold text-lg">Place a bid</h3>
              <p className="text-sm mt-1">Current bid  $200</p>
              <p className="text-[13px] text-red-500 mt-1">2 days 4hour 5min</p>
              <form onSubmit={handleReviewBid} className="my-3 w-full">
                <div>
                  <label className="block capitalize text-sm">Your max bid</label>
                  <div className="flex items-center gap-4">
                    <input defaultValue={bid} required name="bid" type="text" placeholder="$" className="w-full text-hard px-3 outline-none border border-hard rounded-md py-2" />
                    <button type="submit" className="bg-hard whitespace-nowrap text-white font-semibold rounded-md py-3 px-2 text-sm cursor-pointer">Review Bid</button>
                  </div>
                </div>
              </form>
              <p className="text-sm">Enter &200.5 or more</p>
            </div> : 
            confirmBid ?
            <div className="flex justify-center items-center flex-col gap-3 h-[150px]">
              <h2 className="text-3xl font-semibold">Thank You</h2>
              <p className="text-sm">Your bid has been successfully submitted</p>
            </div>
            :
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-lg">Review bid</h3>
              <p className="text-sm mt-1 flex items-center gap-7">Current bid <span>$200</span></p>
              <p className="text-sm mt-1 flex items-center gap-7">Your max bid <span>$666</span></p>
              <p className="text-[13px] text-red-500 mt-1">2 days 4hour 5min</p>
              <div className="mt-5 flex justify-between items-center gap-5 text-sm font-semibold *:cursor-pointer">
                  <button onClick={() =>setConfirmBid(true)} className="text-white bg-hard rounded-md py-2 px-3">Confirm Bid</button>
                    <button onClick={() => setEdit(true)} className="text-hard border border-hard rounded-md py-2 px-8">Edit</button>
              </div>
              <p className="text-[10px] text-red-500 mt-5">When you confirm your bid, it means you’re committing to buy this item if you’re the winning bidder.</p>
            </div>
            
          }
        </div>
      </dialog>
    </div>
  );
};

export default BidsModal;
