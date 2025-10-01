import BreadCrums from '@/app/components/auctions/BreadCrums';
import ProductDetails from '@/app/components/auctions/ProductDetails';
import SimilerProducts from '@/app/components/auctions/SimilerProducts';
import React from 'react';

const page = () => {
    return (
        <div className='px-4 md:px-14 lg:px-16 mt-4 space-y-2'>
            <BreadCrums></BreadCrums>
            <ProductDetails></ProductDetails>
            <SimilerProducts></SimilerProducts>
        </div>
    );
};

export default page;