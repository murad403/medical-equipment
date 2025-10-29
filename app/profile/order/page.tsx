"use client";
import BidCard from '@/app/components/profile/BidCard';
import CompleteBidCard from '@/app/components/profile/CompleteBidCard';
import orderTabs from '@/app/data/order';
import { useGetCurrentUserBidsQuery } from '@/app/redux/api/api';
import { useAppSelector } from '@/app/redux/hook';
import LoadingSpinner from '@/app/shared/LoadingSpinner';
import React, { useState } from 'react';

const page = () => {
    const [activeTab, setActiveTab] = useState("pending");
    const { user } = useAppSelector((state: any) => state.user)
    const { data, isLoading } = useGetCurrentUserBidsQuery(user?._id);
    const bids = data?.data?.filter((bid: any) => bid.status === activeTab);
    // console.log(activeTab);
    return (
        <div>
            <div className='space-x-2 space-y-2'>
                {
                    orderTabs.map((tab: any) =>
                        <button onClick={() => setActiveTab(tab?.id)} key={tab?.id} className={`font-light px-7 py-2 rounded-xl text-lg cursor-pointer ${tab?.id === activeTab ? "bg-hard text-white" : "bg-normal text-hard border border-hard"}`}>{tab?.label}</button>
                    )
                }
            </div>
            <p className='font-light text-xl my-3 text-title'>Products ({bids?.length})</p>
            <div>
                {
                    isLoading ? <LoadingSpinner></LoadingSpinner> :
                        <div className='space-y-3'>
                            {
                                (activeTab === "pending" || activeTab === "progress") ?
                                    bids?.map((bid: any) => <BidCard activeTab={activeTab} key={bid?._id} bid={bid}></BidCard>) :
                                    bids?.map((bid: any) => <CompleteBidCard key={bid?._id} bid={bid}></CompleteBidCard>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default page;