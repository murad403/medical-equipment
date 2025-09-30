import React from 'react';
import SearchProducts from '../components/auctions/SearchProducts';
import BreadCrums from '../components/auctions/BreadCrums';
import CollectibleProducts from '../components/auctions/CollectibleProducts';
import ProductFilter from '../components/auctions/ProductFilter';
import AuctionProducts from '../components/auctions/AuctionProducts';
import AuctionPagination from '../components/auctions/AuctionPagination';

const page = () => {
    return (
        <div className='px-4 md:px-14 lg:px-16 space-y-10 md:space-y-18 flex justify-between gap-10 mt-5'>
            <div className='w-[25%]'>
                <BreadCrums></BreadCrums>
                <CollectibleProducts></CollectibleProducts>
            </div>
            <div className='w-full space-y-10'>
                <SearchProducts></SearchProducts>
                <ProductFilter></ProductFilter>
                <div className="divider text-normal"></div>
                <AuctionProducts></AuctionProducts>
                <AuctionPagination></AuctionPagination>
            </div>
            <h1>murad</h1>
        </div>
    );
};

export default page;