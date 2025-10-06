"use client";
import CompleteBidCard from '@/app/components/profile/CompleteBidCard';
import orderTabs from '@/app/data/order';
import React, { useState } from 'react';

const page = () => {
    const [activeTab, setActiveTab] = useState("pending");
    return (
        <div>
            <div className='space-x-3'>
                {
                    orderTabs.map(tab =>
                        <button onClick={() =>setActiveTab(tab?.id)} key={tab?.id} className={`font-light px-7 py-2 rounded-xl text-lg cursor-pointer ${tab?.id === activeTab ? "bg-hard text-white" : "bg-normal text-hard border border-hard" }`}>{tab?.label}</button>
                    )
                }
            </div>
            <p className='font-light text-xl my-3'>Products (03)</p>
            <div>
                <CompleteBidCard></CompleteBidCard>
            </div>
        </div>
    );
};

export default page;