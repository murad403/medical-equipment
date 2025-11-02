"use client";
import AuctionCard from '@/app/shared/AuctionCard';
import { useGetAllAuctionsQuery } from '@/app/redux/api/api';
import LoadingSpinner from '@/app/shared/LoadingSpinner';

const TopPickedAuctions = () => {
  const {data, isLoading, isError} = useGetAllAuctionsQuery(undefined);
  const auctions = data?.data?.result;

  if (isLoading){
    return (
      <LoadingSpinner></LoadingSpinner>
    )
  };
  return (
    <div>
      <h2 className="text-3xl md:text-4xl lg:text-[43px] text-title font-bold">
        Top-Picked <span className="text-hard">Auctions</span>
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center md:gap-5 gap-3 md:mt-9 lg:mt-12 mt-3'>
        {
          auctions?.slice(0, 8)?.map((product: any) => <AuctionCard key={product?._id} product={product} bgColor={"bg-normal"} isLoading={isLoading}></AuctionCard>)
        }
      </div>
    </div>
  );
};

export default TopPickedAuctions;