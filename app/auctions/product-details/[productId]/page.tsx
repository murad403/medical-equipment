import BreadCrums from '@/app/components/auctions/BreadCrums';
import ProductDetails from '@/app/components/auctions/ProductDetails';
import React from 'react';

const page = () => {
    return (
        <div className='px-4 md:px-14 lg:px-16 mt-4 space-y-2'>
            <BreadCrums></BreadCrums>
            <ProductDetails></ProductDetails>
        </div>
    );
};

export default page;