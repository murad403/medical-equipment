import AuctionCard from '@/app/shared/AuctionCard';
import LoadingSpinner from '@/app/shared/LoadingSpinner';
import React from 'react';

const AuctionProducts = ({auctions, isLoading}: {auctions: any, isLoading: boolean}) => {

    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    
    return (
        <div>
            {
                auctions?.length > 0 ?
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5'>
            {
                auctions?.map((product: any) => <AuctionCard key={product?._id} product={product} bgColor={"bg-normal"}></AuctionCard>)
            }
        </div>
        : <p className='text-center text-red-500 font-xl'>Not found auctions...</p>
            }
        </div>
    );
};

export default AuctionProducts;