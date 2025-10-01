import auctions from '@/app/data/auctions';
import AuctionCard from '@/app/shared/AuctionCard';
import React from 'react';

const SimilerProducts = () => {
    return (
        <div className='md:mt-16 mt-0'>
            <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Similer Products</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3'>
                {
                    auctions.slice(0,4).map(product =><AuctionCard key={product?.id} product={product} bgColor={"bg-normal"}></AuctionCard>)
                }
            </div>
        </div>
    );
};

export default SimilerProducts;