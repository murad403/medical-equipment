import React from 'react';
import Withdraw from './seller-component/dashboard/Withdraw';
import Stats from './seller-component/dashboard/Stats';
import AreaChart from '../shared/AreaChart';
import PieChart from '../shared/PieChart';

const page = () => {
    return (
        <div className='space-y-3 md:space-y-5'>
            <Withdraw></Withdraw>
            <Stats></Stats>
            {/* income ratio */}
            <div className='flex items-center md:gap-7 gap-4'>
                <div className='md:w-2/3 w-full'>
                    <AreaChart></AreaChart>
                </div>
                <div className='md:w-1/3 w-full'>
                    <PieChart></PieChart>
                </div>
            </div>
        </div>
    );
};

export default page;