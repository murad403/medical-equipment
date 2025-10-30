"use client";
import { useAddSellerBidStatusMutation } from "@/app/redux/api/api";
import getDateAndTime from "@/app/utils/getDateAndTime";
import { MdOutlineCheck } from "react-icons/md";
import Swal from "sweetalert2";

const BidderList = ({ bid, index }: { bid: any, index: number }) => {
    const [addSellerBidStatus, { isLoading }] = useAddSellerBidStatusMutation();
    const { createdAt } = bid;
    const { date, time } = getDateAndTime(createdAt);
    // console.log(date, time);
    const handleWinBid = () => {
        Swal.fire({
            title: "Confirm Bid Winner?",
            text: "Are you sure you want to mark this bidder as the winner?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, mark as winner!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await addSellerBidStatus({ id: bid?._id, payload: { status: "win" } }).unwrap();
                    Swal.fire({
                        title: "Bid Marked as Winner!",
                        text: `The bid has been successfully updated to 'win' status.`,
                        icon: "success"
                    });
                } catch (error: any) {
                    Swal.fire("Something went wrong while updating the bid", error);
                }
            }
        });
    }

    return (
        <tr className="border-b border-hard text-title">
            <th>{index + 1}</th>
            <td>{bid?.customerId?.name}</td>
            <td>{bid?.productId?.title}</td>
            <td>{bid?.productId?.category}</td>
            <td>${bid?.bidPrice}</td>
            <td>{date}, {time}</td>
            <td className="pl-8">
                {
                    bid?.status === "placed" ? <button onClick={handleWinBid} className="cursor-pointer bg-green-500 text-white px-2 rounded-lg">
                        {
                            isLoading ? <span className="loading loading-dots loading-xs"></span> : <div className="flex items-center gap-1">
                                <span>Mark as Winner</span>
                                <MdOutlineCheck />
                            </div>
                        }
                    </button> :
                        <p className="text-sm text-red-500">Bid already confirmed</p>
                }
            </td>
        </tr>
    );
};

export default BidderList;