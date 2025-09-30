import React from 'react';
import sellingSteps from '../../data/sellingSteps';
import Image from 'next/image';

const SellingSteps = () => {
    return (
        <div className='bg-hard py-12'>
            <div className='text-white text-center'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Become  a  Seller  in  Minutes</h2>
                <p className='text-[17px]'>Start listing and selling your medical equipment in just a few steps — with only a 10% commission.</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 px-4 md:px-14 lg:px-16 mt-10'>
                {
                    sellingSteps.map(step =>
                        <div className='bg-white rounded-lg flex justify-center items-center flex-col py-5 gap-2' key={step?.id}>
                            <div className='rounded-full bg-hard p-2'>
                                <Image className='w-[32px] ' src={step?.icon} alt={step?.title}></Image>
                            </div>
                            <p className='text-[18px] font-semibold'>{step?.title}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SellingSteps;