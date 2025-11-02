"use client";
import BidCard from '@/app/components/profile/BidCard';
import historyTabs from '@/app/data/history';
import SecureUserRoute from '@/app/hooks/SecureUserRoute';
import { useGetCurrentUserBidsQuery } from '@/app/redux/api/api';
import { useAppSelector } from '@/app/redux/hook';
import LoadingSpinner from '@/app/shared/LoadingSpinner';
import React, { useState } from 'react';

const page = () => {
    const [activeTab, setActiveTab] = useState("placed");
    const { user } = useAppSelector((state: any) => state?.user);
    const { data, isLoading } = useGetCurrentUserBidsQuery(user?._id);
    const bids = data?.data?.filter((bid: any) => bid?.status === activeTab);
    return (
        <SecureUserRoute>
            <div className='space-x-3'>
                {
                    historyTabs.map(tab =>
                        <button onClick={() => setActiveTab(tab?.id)} key={tab?.id} className={`font-light px-12 py-2 rounded-xl text-lg cursor-pointer ${tab?.id === activeTab ? "bg-hard text-white" : "bg-normal text-hard border border-hard"}`}>{tab?.label}</button>
                    )
                }
            </div>
            <p className='font-light text-xl my-3 text-title'>Products ({bids?.length})</p>
            <div>
                {
                    isLoading ? <LoadingSpinner></LoadingSpinner> : 
                    <div className='space-y-2'>
                        {
                            bids?.map((bid: any) => <BidCard key={bid?._id} bid={bid} activeTab={activeTab}></BidCard>)
                        }
                    </div>
                }
            </div>
        </SecureUserRoute>
    );
};

export default page;