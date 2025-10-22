"use client";
import React, { useState } from 'react';
import SearchProducts from '../components/auctions/SearchProducts';
import BreadCrums from '../components/auctions/BreadCrums';
import CollectibleProducts from '../components/auctions/CollectibleProducts';
import ProductFilter from '../components/auctions/ProductFilter';
import AuctionProducts from '../components/auctions/AuctionProducts';
import AuctionPagination from '../components/auctions/AuctionPagination';
import { useGetAllAuctionsQuery } from '../redux/api/api';

const page = () => {
    const [search, setSearch] = useState("");
    const {data, isLoading} = useGetAllAuctionsQuery(search);
    const auctions = data?.data;
    // console.log(auctions);

    return (
        <div className='px-4 md:px-14 lg:px-16 space-y-10 md:space-y-18 flex justify-between md:gap-10 gap-3 mt-5'>
            <div className='md:w-[25%] w-[40%]'>
                <BreadCrums></BreadCrums>
                <CollectibleProducts setSearch={setSearch}></CollectibleProducts>
            </div>
            <div className='md:w-full w-[60%] md:space-y-10 space-y-4'>
                <SearchProducts setSearch={setSearch}></SearchProducts>
                <ProductFilter auctions={auctions}></ProductFilter>
                <div className="divider divider-info"></div>
                <AuctionProducts auctions={auctions} isLoading={isLoading}></AuctionProducts>
                <AuctionPagination></AuctionPagination>
            </div>
        </div>
    );
};

export default page;