import { useAddPaymentMutation, useRemoveBidMutation } from "@/app/redux/api/api";
import getDateAndTime from "@/app/utils/getDateAndTime";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { isNullOrUndefined } from "node:util";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const BidCard = ({ bid, activeTab }: { bid: any, activeTab: string }) => {
    const [removeBid] = useRemoveBidMutation();
    const [addPayment, {isLoading: paymentLoading}] = useAddPaymentMutation();
    const image = bid?.productId?.images?.[0]?.image;
    const { title, description, price, location } = bid.productId;
    const { createdAt, bidPrice, _id } = bid;
    const {date, time} = getDateAndTime(createdAt);
    const pathName = usePathname();
    const isOrderPage = pathName.endsWith("/order");

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
    const handlePayment = () =>{
        const product = {
            name: title,
            image,
            price: bidPrice,
            bidId: _id
        }
        Swal.fire({
            title: "Confirm Your Payment?",
            text: "Once confirmed, your bid will be marked as paid and cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make the payment!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const result: any = await addPayment(product).unwrap();
                    window.location.href = result?.url;
                } catch (error: any) {
                    Swal.fire("Oops!, Something went wrong while processing your payment.", error);
                }
            }
        });
    }

    return (
        <div className="flex flex-col md:flex-row gap-4 p-3 border border-hard rounded-xl text-title">
            <Image className="w-full md:h-[300px] h-[240px] md:w-[40%] rounded-lg" width={500} height={500} src={image} alt="product"></Image>
            <div className="flex flex-col justify-between md:gap-0 gap-2 w-full md:w-[60%]">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl">{title}</h3>
                    <div>
                        {
                            (!isOrderPage && activeTab === "placed")?
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
                                <button onClick={handlePayment} className="cursor-pointer bg-hard text-white font-semibold px-2 rounded-lg py-1">{
                                    paymentLoading ? <span className="loading loading-spinner text-white"></span> : <p>Pay Now</p>
                                }</button> :
                                <div>
                                    {
                                        activeTab === "progress" ?
                                        null :
                                        isOrderPage ? <p className="text-hard bg-normal rounded-lg px-3 py-1 capitalize">{activeTab}</p> : null
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