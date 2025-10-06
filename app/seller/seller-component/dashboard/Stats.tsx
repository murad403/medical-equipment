import React from 'react';
import stats from '../../seller-data/stats';
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

const Stats = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 justify-between items-center gap-5'>
            {
                stats.map((stat, index) =>
                    <div className='flex items-center md:gap-10 gap-3 bg-normal border border-hard md:p-4 p-2 rounded-sm' key={index}>
                        <HiOutlineClipboardDocumentCheck className='text-hard' size={50}/>
                        <div>
                            <p className='text-sm'>{stat.title}</p>
                            <h3 className='text-4xl font-semibold'>{stat.summary}</h3>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Stats;