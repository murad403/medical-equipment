import Image from 'next/image';

const AuctionCard = ({product, bgColor}: any) => {
    return (
        <div className={`${bgColor} p-2 rounded-lg space-y-2`}>
            <Image className='w-full' src={product?.img} alt={product?.title}></Image>
            <h3 className='text-[20px] capitalize'>{product?.title}</h3>
            <p className='text-sm'>{product?.city}</p>
            <div className='flex justify-between items-center'>
                <p className='text-primary font-bold text-[17px]'>${product?.price}</p>
                <p className='font-bold text-sm'>{product?.bids} Bids</p>
            </div>
            <p className='text-sm text-red-500'>{product?.time}</p>
        </div>
    );
};

export default AuctionCard;