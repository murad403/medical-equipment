import auctions from '@/app/data/auctions';
import AuctionCard from '@/app/shared/AuctionCard';
import React from 'react';

const AuctionProducts = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                auctions.map(product => <AuctionCard key={product?.id} product={product} bgColor={"bg-normal"}></AuctionCard>)
            }
        </div>
    );
};

export default AuctionProducts;