"use client";
import { useGetAllAuctionsQuery } from '@/app/redux/api/api';
import AuctionCard from '@/app/shared/AuctionCard';
import LoadingSpinner from '@/app/shared/LoadingSpinner';
import React from 'react';

const AuctionProducts = ({auctions, isLoading}: {auctions: any, isLoading: boolean}) => {

    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                auctions?.map((product: any) => <AuctionCard key={product?._id} product={product} bgColor={"bg-normal"}></AuctionCard>)
            }
        </div>
    );
};

export default AuctionProducts;