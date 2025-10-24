"use client";
import BidCard from '@/app/components/profile/BidCard';
import historyTabs from '@/app/data/history';
import { useGetCurrentUserBidsQuery } from '@/app/redux/api/api';
import { useAppSelector } from '@/app/redux/hook';
import React, { use, useEffect, useState } from 'react';

const page = () => {
    const [activeTab, setActiveTab] = useState("bid");
    const {user} = useAppSelector((state: any) => state?.user);
    // console.log(user?._id);
    const {data, isLoading} = useGetCurrentUserBidsQuery(user?._id);
    const bidProducts = data?.data;
    console.log(bidProducts);
    return (
        <div>
            <div className='space-x-3'>
                {
                    historyTabs.map(tab =>
                        <button onClick={() =>setActiveTab(tab?.id)} key={tab?.id} className={`font-light px-12 py-2 rounded-xl text-lg cursor-pointer ${tab?.id === activeTab ? "bg-hard text-white" : "bg-normal text-hard border border-hard" }`}>{tab?.label}</button>
                    )
                }
            </div>
            <p className='font-light text-xl my-3 text-title'>Products (03)</p>
            <div>
                <BidCard></BidCard>
            </div>
        </div>
    );
};

export default page;