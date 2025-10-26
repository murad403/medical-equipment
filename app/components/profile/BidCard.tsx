import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

const BidCard = ({ bid, activeTab }: { bid: any, activeTab: string }) => {
    // console.log(bid);
    const image = bid?.productId?.images?.[0]?.image;
    const { title, description, price, location } = bid.productId;
    const { createdAt, bidPrice } = bid;
    const date = new Date(createdAt).toDateString();
    const time = new Date(createdAt).toLocaleTimeString();
    // console.log(time, date);
    return (
        <div className="flex flex-col md:flex-row gap-4 p-3 border border-hard rounded-xl text-title">
            <Image className="w-full md:h-[300px] md:w-1/2 rounded-lg" width={500} height={500} src={image} alt="product"></Image>
            <div className="flex flex-col justify-between md:gap-0 gap-2">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl">{title}</h3>
                    <div>
                        {
                            activeTab === "pending" ?
                                <button className="cursor-pointer">
                                    <RiDeleteBin6Line />
                                </button> :
                                null
                        }
                    </div>
                </div>
                <p className="font-light text-[15px]">{description}</p>
                <h3 className="font-bold text-xl">${price}</h3>
                <h4 className="text-[17px]">My Bid Amount : ${bidPrice}</h4>
                {/* <h4 className="text-[17px] text-gray-700">My Bid Amount : ${bidPrice}</h4> */}
                <h3 className="text-lg">Bid Time : {date}, {time}</h3>
                <div className="flex justify-between items-center">
                    <h3 className="text-lg">{location}</h3>
                    <div>
                        {
                            activeTab === "win" ?
                            <button className="cursor-pointer bg-hard text-white font-semibold px-2 rounded-lg py-1">Pay Now</button> : 
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BidCard;