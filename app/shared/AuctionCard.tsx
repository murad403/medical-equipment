import Image from 'next/image';
import useGetTime from '../hooks/useGetTime';
import Link from 'next/link';

const AuctionCard = ({product, bgColor}: any) => {
    const image = product?.images?.[0]?.image;
    if(!image){
        return <p>Loading</p>
    }
    const productCreateTime = new Date(product?.createdAt);
    const time = useGetTime(productCreateTime);
    // console.log("time", time);
    return (
        <Link href={`/auctions/product-details/${product?._id}`} className={`${bgColor} p-2 rounded-lg space-y-2`}>
            <Image className='w-full rounded-xl h-[200px]' src={image} width={100} height={100} alt={product?.title}></Image>
            <h3 className='text-[20px] capitalize text-black'>{product?.title}</h3>
            <p className='text-sm text-title'>{product?.location}</p>
            <div className='flex justify-between items-center'>
                <p className='text-hard font-bold text-[17px]'>${product?.price}</p>
                <p className='font-bold text-sm text-title'>{product?.bids ? product?.bids : 0} Bids</p>
            </div>
            <p className='text-sm text-red-500'>{time}</p>
        </Link>
    );
};

export default AuctionCard;