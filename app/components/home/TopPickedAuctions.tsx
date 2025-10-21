"use client";
import auctions, { TAuctions } from '@/app/data/auctions';
import AuctionCard from '@/app/shared/AuctionCard';
import { useGetAllAuctionsQuery } from '@/app/redux/api/api';

const TopPickedAuctions = () => {
  const {data, isLoading, isError} = useGetAllAuctionsQuery(undefined);
  const auctions = data?.data;
  if (isLoading) return <p className='font-black text-red-500 text-7xl'>Loading...</p>;
  // console.log(auctions);
  return (
    <div>
      <h2 className="text-3xl md:text-4xl lg:text-[43px] text-title font-bold">
        Top-Picked <span className="text-hard">Auctions</span>
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center md:gap-5 gap-3 md:mt-9 lg:mt-12 mt-3'>
        {
          auctions.map((product: any) => <AuctionCard key={product?._id} product={product} bgColor={"bg-normal"}></AuctionCard>)
        }
      </div>
    </div>
  );
};

export default TopPickedAuctions;