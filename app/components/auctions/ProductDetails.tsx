"use client"
import React from 'react';
import productImage from "../../../public/product.jpg"
import Image from 'next/image';
import BidsModal from './BidsModal';

const ProductDetails = () => {
    return (
        <div className='flex md:flex-row flex-col items-center gap-5'>
            <div className='w-full md:w-[20%] flex flex-row md:flex-col gap-3'>
                <Image className='md:w-full w-1/3' src={productImage} alt='product'></Image>
                <Image className='md:w-full w-1/3' src={productImage} alt='product'></Image>
                <Image className='md:w-full w-1/3' src={productImage} alt='product'></Image>
            </div>
            <div className='flex sm:flex-row flex-col w-full md:w-[80%] gap-5 justify-between'>
                <div className='w-full sm:w-1/2'>
                <Image className='w-full' src={productImage} alt='product'></Image>
            </div>
            <div className='w-full sm:w-1/2 space-y-3'>
                <h2 className='md:text-3xl text-2xl lg:text-4xl font-bold text-title'>GE Vivid S70 Ultrasound Machine</h2>
                <p className='text-[15px] text-title'>Advanced cardiovascular ultrasound system with crystal-clear imaging and intuitive workflow. Combines high performance with portability for efficient diagnostics anytime, anywhere.</p>
                <h3 className='font-bold md:text-3xl text-2xl lg:text-4xl text-hard'>$200</h3>
                <p className='text-sm text-hard'>2 Bids</p>
                <p className='text-sm text-red-500'>2  days  4hour  5min</p>
                <p className='text-sm font-light text-title'>location</p>
                <button onClick={()=>{(document.getElementById('my_modal_3') as HTMLDialogElement).showModal()}} className='text-sm text-title border border-hard rounded-lg w-full py-2 mt-4 cursor-pointer'>Place a Bid</button>
            </div>
            </div>
            <BidsModal></BidsModal>
        </div>
    );
};

export default ProductDetails;