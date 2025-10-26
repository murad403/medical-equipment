import { useRemoveBidMutation } from "@/app/redux/api/api";
import LoadingSpinner from "@/app/shared/LoadingSpinner";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const BidCard = ({ bid, activeTab, isLoading }: { bid: any, activeTab: string, isLoading: boolean }) => {
    const [removeBid] = useRemoveBidMutation();
    const image = bid?.productId?.images?.[0]?.image;
    const { title, description, price, location } = bid.productId;
    const { createdAt, bidPrice, _id } = bid;
    const date = new Date(createdAt).toDateString();
    const time = new Date(createdAt).toLocaleTimeString();
    const pathName = usePathname();
    const isOrderPage = pathName.endsWith("/order");
    // console.log(isOrderPage);

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }
    const handleDeleteBid = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const result = await removeBid(_id).unwrap();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${result?.message}`,
                        icon: "success"
                    });
                } catch (error) {
                    Swal.fire("Error!", "Something went wrong!", "error");
                }
            }
        });
    }

    return (
        <div className="flex flex-col md:flex-row gap-4 p-3 border border-hard rounded-xl text-title">
            <Image className="w-full md:h-[300px] md:w-1/2 rounded-lg" width={500} height={500} src={image} alt="product"></Image>
            <div className="flex flex-col justify-between md:gap-0 gap-2 w-full">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl">{title}</h3>
                    <div>
                        {
                            !isOrderPage ?
                                <button onClick={handleDeleteBid} className="cursor-pointer">
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
                <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg">{location}</h3>
                    <div>
                        {
                            (activeTab === "win" && !isOrderPage) ?
                                <button className="cursor-pointer bg-hard text-white font-semibold px-2 rounded-lg py-1">Pay Now</button> :
                                <div>
                                    {
                                        activeTab === "progress" ?
                                        <button className="cursor-pointer text-white bg-green-500 px-2 py-1 rounded-lg">Accept Order</button> :
                                        <p className="text-hard bg-normal rounded-lg px-3 py-1 capitalize">{activeTab}</p>
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BidCard;