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
                <div className='px-3 md:px-5 lg:px-7'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default layout;