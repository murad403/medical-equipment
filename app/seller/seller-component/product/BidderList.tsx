import useGetDateAndTime from "@/app/hooks/useGetDateAndTime";
import { SlEye } from "react-icons/sl";


const BidderList = ({bid, index} : {bid: any, index: number}) => {
    const {createdAt} = bid;
    const {date, time} = useGetDateAndTime(createdAt);
    // console.log(createdAt);
    return (
        <tr className="border-b border-hard text-title">
            <th>{index + 1}</th>
            <td>{bid?.customerId?.name}</td>
            <td>{bid?.productId?.title}</td>
            <td>{bid?.productId?.category}</td>
            <td>${bid?.bidPrice}</td>
            <td>{date}, {time}</td>
            <td className="pl-8">
                <button className="cursor-pointer">
                    <SlEye size={17} />
                </button>
            </td>
        </tr>
    );
};

export default BidderList;