"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import BidsModal from './BidsModal';
import { useGetAllAuctionsQuery } from '@/app/redux/api/api';
import { useParams } from 'next/navigation';
import LoadingSpinner from '@/app/shared/LoadingSpinner';
import getTime from '@/app/utils/getTime';

const ProductDetails = ({ setSearch }: { setSearch: any }) => {
    const { data, isLoading } = useGetAllAuctionsQuery({ page: 1, limit: 12, search: "", filter: "" });
    const { productId } = useParams();
    const currentProduct = data?.data?.result?.find((product: any) => product._id === productId);
    useEffect(() => {
        if (currentProduct) {
            setSearch(currentProduct?.category);
        }
    }, [currentProduct])
    const [selectedImage, setSelectedImage] = useState<string>("");
    const hanldeSelectedImage = (id: string) => {
        const currentImage = currentProduct?.images.find((image: any) => image?.id === id);
        setSelectedImage(currentImage?.image);
    }
    const productCreateTime = new Date(currentProduct?.createdAt);
    const time = getTime(productCreateTime);
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    // console.log(currentProduct.sellerId);
    return (
        <div className='flex md:flex-row flex-col items-center gap-5'>
            <div className='w-full md:w-[20%] flex flex-row md:flex-col gap-2'>
                {
                    currentProduct?.images.map((image: any) =>
                        <Image onClick={() => hanldeSelectedImage(image?.id)} width={500} height={500} key={image?.id} className='md:w-full w-1/3 h-[150px] md:h-[160px] rounded-lg' src={image.image} alt='product'></Image>
                    )
                }
            </div>
            <div className='flex sm:flex-row flex-col w-full md:w-[80%] gap-5 justify-between items-center'>
                <div className='w-full sm:w-1/2'>
                    <Image width={500} height={500} className='w-full rounded-lg h-[400px] md:h-[430px]' src={selectedImage || currentProduct?.images?.[0]?.image} alt='product'></Image>
                </div>
                <div className='w-full sm:w-1/2 space-y-3'>
                    <h2 className='md:text-3xl text-2xl lg:text-4xl font-bold text-title'>{currentProduct?.title}</h2>
                    <p className='text-[15px] text-title'>{currentProduct?.description}</p>
                    <h3 className='font-bold md:text-3xl text-2xl lg:text-4xl text-hard'>${currentProduct?.price}</h3>
                    <p className='text-sm text-hard'>{currentProduct?.bids} Bids</p>
                    <p className='text-sm text-red-500'>{time}</p>
                    <p className='text-sm font-light text-title'>{currentProduct?.location}</p>
                    <button onClick={() => { (document.getElementById('my_modal_3') as HTMLDialogElement).showModal() }} className='text-sm text-hard font-semibold border border-hard rounded-lg w-full py-2 mt-4 cursor-pointer'>Place a Bid</button>
                </div>
            </div>
            <BidsModal currentProduct={currentProduct} time={time}></BidsModal>
        </div>
    );
};

export default ProductDetails;