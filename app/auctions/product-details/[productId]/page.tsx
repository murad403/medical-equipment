"use client";
import BreadCrums from '@/app/components/auctions/BreadCrums';
import ProductDetails from '@/app/components/auctions/ProductDetails';
import SimilerProducts from '@/app/components/auctions/SimilerProducts';
import { useGetAllAuctionsQuery } from '@/app/redux/api/api';
import React, { useState } from 'react';

const page = () => {
    const [search, setSearch] = useState("");
    const { data } = useGetAllAuctionsQuery({ page: 1, limit: 12, search, filter: "" });
    const auctions = data?.data?.result;
    // console.log(auctions);
    return (
        <div className='px-4 md:px-14 lg:px-16 mt-4 space-y-2'>
            <BreadCrums></BreadCrums>
            <ProductDetails setSearch={setSearch}></ProductDetails>
            <SimilerProducts auctions={auctions}></SimilerProducts>
        </div>
    );
};

export default page;