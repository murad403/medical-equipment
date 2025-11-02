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
    const [page, setPage] = React.useState(1);
    const limit = 12;

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const {data, isLoading} = useGetAllAuctionsQuery({search, filter, page, limit});
    const auctions = data?.data?.result;
    const totalAuctions = data?.data?.totalAuctions;
    // console.log(filter);

    return (
        <div className='px-4 md:px-14 lg:px-16 flex flex-col md:flex-row justify-between md:gap-5 lg:gap-10 gap-3 md:mt-5 mt-0'>
            <div className='md:w-[25%] w-[40%]'>
                <BreadCrums></BreadCrums>
                <CollectibleProducts setSearch={setSearch}></CollectibleProducts>
            </div>
            <div className='md:w-full md:space-y-5'>
                <SearchProducts setSearch={setSearch}></SearchProducts>
                <ProductFilter setFilter={setFilter} auctions={auctions} setSearch={setSearch}></ProductFilter>
                <div className="divider divider-info"></div>
                <AuctionProducts auctions={auctions} isLoading={isLoading}></AuctionProducts>
                <AuctionPagination limit={limit} page={page} setPage={setPage} totalAuctions={totalAuctions}></AuctionPagination>
            </div>
        </div>
    );
};

export default page;