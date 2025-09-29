import React from 'react';
import product from "../../../public/product.jpg";
import Image from 'next/image';

const Auctions = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5'>
            {
                auctions.map(product =>
                    <div className='bg-normal p-2 rounded-lg space-y-2' key={product?.id}>
                        <Image className='w-full' src={product?.img} alt={product?.title}></Image>
                        <h3 className='text-[20px] capitalize'>{product?.title}</h3>
                        <p className='text-sm'>{product?.city}</p>
                        <div className='flex justify-between items-center'>
                            <p className='text-primary font-bold text-[17px]'>${product?.price}</p>
                            <p className='font-bold text-sm'>{product?.bids} Bids</p>
                        </div>
                        <p className='text-sm font-semibold text-red-700'>{product?.time}</p>
                    </div>
                )
            }
        </div>
    );
};
type TAuctions = {
    id: number;
    img: any;
    title: string;
    city: string;
    price: number;
    bids: number;
    time: string;
}[]
const auctions: TAuctions = [
    {
        id: 1,
        img: product,
        title: 'md murad islam',
        city: "Dhaka",
        price: 200,
        bids: 2,
        time: "2 hours ago"
    },
    {
        id: 2,
        img: product,
        title: 'md murad islam',
        city: "Dhaka",
        price: 200,
        bids: 2,
        time: "2 hours ago"
    },
    {
        id: 3,
        img: product,
        title: 'md murad islam',
        city: "Dhaka",
        price: 200,
        bids: 2,
        time: "2 hours ago"
    },
    {
        id: 4,
        img: product,
        title: 'md murad islam',
        city: "Dhaka",
        price: 200,
        bids: 2,
        time: "2 hours ago"
    },
    {
        id: 5,
        img: product,
        title: 'md murad islam',
        city: "Dhaka",
        price: 200,
        bids: 2,
        time: "2 hours ago"
    },
]
export default Auctions;