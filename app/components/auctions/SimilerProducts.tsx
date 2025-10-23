"use client";
import AuctionCard from '@/app/shared/AuctionCard';
import { useState } from 'react';

const SimilerProducts = ({auctions}: {auctions:any}) => {
    const [isSeeAll, setIsSeeAll] = useState<boolean>(false);
    const sliceAuctions = isSeeAll ? auctions : auctions?.slice(0, 8);
    return (
        <div className='md:mt-16 mt-0'>
            <div className='flex justify-between items-center'>
                <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-title'>Similer Products</h2>
                <button onClick={() => setIsSeeAll(true)} className='text-hard cursor-pointer underline underline-offset-2'>see all</button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3'>
                {
                    sliceAuctions?.map((product: any) =><AuctionCard key={product?._id} product={product} bgColor={"bg-normal"}></AuctionCard>)
                }
            </div>
        </div>
    );
};

export default SimilerProducts;