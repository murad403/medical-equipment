import Image from 'next/image';

const AuctionCard = ({product, bgColor}: any) => {
    // console.log(product?.images?.[0]?.image);
    return (
        <div className={`${bgColor} p-2 rounded-lg space-y-2`}>
            {/* <Image className='w-full rounded-xl' src={product?.images?.[0]?.image} alt={product?.title}></Image> */}
            <h3 className='text-[20px] capitalize text-black'>{product?.title}</h3>
            <p className='text-sm text-title'>{product?.location}</p>
            <div className='flex justify-between items-center'>
                <p className='text-hard font-bold text-[17px]'>${product?.price}</p>
                <p className='font-bold text-sm text-title'>Bids</p>
            </div>
            <p className='text-sm text-red-500'></p>
        </div>
    );
};

export default AuctionCard;