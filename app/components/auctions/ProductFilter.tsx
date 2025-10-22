"use client";
import { TTabs } from '@/app/interface/tabs';
import React, { useState } from 'react';

const ProductFilter = ({auctions}: {auctions: any}) => {
    const [tabActive, setTabActive] = useState("all listing");

    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-3 md:gap-0'>
            <div className='bg-normal rounded-lg p-4 flex gap-6 items-center'>
                {
                    tabs.map(tab =>
                        <button className={`cursor-pointer text-[17px] py-1 px-2 rounded-lg ${tabActive === tab.id ? "bg-hard text-white" : "text-title"}`} onClick={() => setTabActive(tab?.id)} key={tab?.id}>{tab?.label}</button>
                    )
                }
            </div>
            <div className='text-hard text-[17px] flex items-center gap-5'>
                <p>{auctions?.length} results</p>
                <button className='border border-hard rounded-lg cursor-pointer p-2'>Sort: Auction time</button>
            </div>
        </div>
    );
};
const tabs: TTabs[] = [
    {
        id: "all listing",
        label: "All Listing"
    },
    {
        id: "auction",
        label: "Auction"
    }
]
export default ProductFilter;