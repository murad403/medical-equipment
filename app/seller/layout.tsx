import React from 'react';
import SellerMenu from './seller-shared/SellerMenu';
import SellerHeading from './seller-shared/SellerHeading';

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='flex'>
            <div className='md:w-[20%] hidden md:block'>
                <SellerMenu></SellerMenu>
            </div>
            <div className='w-full'>
                <SellerHeading></SellerHeading>
                <div className='p-3 md:p-5'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default layout;