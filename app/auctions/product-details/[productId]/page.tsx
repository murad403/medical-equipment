"use client";
import BreadCrums from '@/app/components/auctions/BreadCrums';
import ProductDetails from '@/app/components/auctions/ProductDetails';
import SimilerProducts from '@/app/components/auctions/SimilerProducts';
import { useGetAllAuctionsQuery } from '@/app/redux/api/api';
import React, { useState } from 'react';

const page = () => {
    const [search, setSearch] = useState("");
    const { data } = useGetAllAuctionsQuery(search);
    const auctions = data?.data;
    // console.log(search);
    return (
        <div className='px-4 md:px-14 lg:px-16 mt-4 space-y-2'>
            <BreadCrums></BreadCrums>
            <ProductDetails setSearch={setSearch}></ProductDetails>
            <SimilerProducts auctions={auctions}></SimilerProducts>
        </div>
    );
};

export default page;