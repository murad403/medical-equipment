"use client";
import BidCard from '@/app/components/profile/BidCard';
import historyTabs from '@/app/data/history';
import { useGetCurrentUserBidsQuery } from '@/app/redux/api/api';
import { useAppSelector } from '@/app/redux/hook';
import React, { useState } from 'react';

const page = () => {
    const [activeTab, setActiveTab] = useState("pending");
    const {user} = useAppSelector((state: any) => state?.user);
    // console.log(user?._id);
    const {data, isLoading} = useGetCurrentUserBidsQuery(user?._id);
    const bids = data?.data?.filter((bid: any) => bid?.status === activeTab);
    // console.log(bids, activeTab);
    return (
        <div>
            <div className='space-x-3'>
                {
                    historyTabs.map(tab =>
                        <button onClick={() =>setActiveTab(tab?.id)} key={tab?.id} className={`font-light px-12 py-2 rounded-xl text-lg cursor-pointer ${tab?.id === activeTab ? "bg-hard text-white" : "bg-normal text-hard border border-hard" }`}>{tab?.label}</button>
                    )
                }
            </div>
            <p className='font-light text-xl my-3 text-title'>Products ({bids?.length})</p>
            <div>
                {
                    bids?.map((bid: any) => <BidCard key={bid?._id} bid={bid} activeTab={activeTab}></BidCard>)
                }
            </div>
        </div>
    );
};

export default page;