"use client"
import React, { useState } from 'react';
import productImage from "../../../public/product.jpg"
import Image from 'next/image';
import BidsModal from './BidsModal';
import { useGetAllAuctionsQuery } from '@/app/redux/api/api';
import { useParams } from 'next/navigation';

const ProductDetails = () => {
    const {data, isLoading} = useGetAllAuctionsQuery(undefined);
    const {productId} = useParams();
    const currentProduct = data?.data.find((product: any) => product._id === productId);
    const [selectedImage, setSelectedImage] = useState<string>("");
    const hanldeSelectedImage = (id: string) =>{
        const currentImage = currentProduct?.images.find((image: any) => image?.id === id);
        setSelectedImage(currentImage?.image);
    }
    // console.log(selectedImage);
    // console.log(currentProduct);
    return (
        <div className='flex md:flex-row flex-col items-center gap-5'>
            <div className='w-full md:w-[20%] flex flex-row md:flex-col gap-2'>
                {
                    currentProduct?.images.map((image: any) =>
                        <Image onClick={() =>hanldeSelectedImage(image?.id)} width={500} height={500} key={image?.id} className='md:w-full w-1/3 rounded-lg' src={image.image} alt='product'></Image>
                    )
                }
            </div>


            <div className='flex sm:flex-row flex-col w-full md:w-[80%] gap-5 justify-between'>
                <div className='w-full sm:w-1/2'>
                <Image width={500} height={500} className='w-full rounded-lg h-[400px]' src={selectedImage ? selectedImage : currentProduct?.images?.[0]?.image} alt='product'></Image>
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