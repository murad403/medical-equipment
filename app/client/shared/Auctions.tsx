import React from 'react';
import AuctionCard from './AuctionCard';
import auctions, { TAuctions } from '../data/auctions';

const Auctions = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-5'>
            {
                auctions.map((product: TAuctions) => <AuctionCard key={product?.id} product={product} bgColor={"bg-normal"}></AuctionCard>)
            }
        </div>
    );
};
export default Auctions;