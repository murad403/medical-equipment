"use client";
import { TTabs } from '@/app/interface/tabs';
import React, { useState } from 'react';
import { categories } from './CollectibleProducts';

const ProductFilter = ({ auctions, setFilter, setSearch }: { auctions: any, setFilter: any, setSearch: any }) => {
    const [tabActive, setTabActive] = useState("all listing");
    const handleFilter = (id: string) => {
        setTabActive(id);
        setFilter(id);
        setSearch("");
    }
    return (
        <div className='mt-4 space-y-4'>
            <form className="w-full block md:hidden">
                <select onChange={(e) => setSearch(e.currentTarget.value)} className="w-full outline-none border border-hard py-2 px-3 rounded-lg appearance-none text-hard" name="" id="">
                    <option value="" disabled>Filter by category</option>
                    {
                        categories.map((category, index) => 
                            <option key={index} value={category}>{category}</option>
                        )
                    }
                </select>
            </form>
            <div className='flex md:mt-0 items-center justify-between gap-3 md:gap-0'>
                <div className='bg-normal rounded-lg p-4 flex gap-6 items-center'>
                    {
                        tabs.map(tab =>
                            <button className={`cursor-pointer text-[17px] py-1 px-2 rounded-lg ${tabActive === tab.id ? "bg-hard text-white" : "text-title"}`} onClick={() => handleFilter(tab?.id)} key={tab?.id}>{tab?.label}</button>
                        )
                    }
                </div>
                <div className='text-hard text-[17px] flex items-center gap-5'>
                    <p className='border p-2 rounded-xl font-semibold'>{auctions?.length} results</p>
                    {/* <button className='border border-hard rounded-lg cursor-pointer p-2'>Sort: Auction time</button> */}
                </div>
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