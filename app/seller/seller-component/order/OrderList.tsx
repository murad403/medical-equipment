import getDateAndTime from '@/app/utils/getDateAndTime';
import Link from 'next/link';
import React from 'react';
import { SlEye } from 'react-icons/sl';

const OrderList = ({bid, index}: {bid: any, index: number}) => {
    const createdAt = bid?.createdAt;
    const {time, date} = getDateAndTime(createdAt);
    // console.log(bid);
    return (
        <tr className="border-b border-hard text-title">
              <th>{index + 1}</th>
              <td>{bid?.customerId?.name}</td>
              <td>{bid?.customerId?.email}</td>
              <td>{bid?.productId?.title}</td>
              <td>${bid?.bidPrice}</td>
              <td>{date}, {time}</td>
              <td>
                <p className={`${bid?.status === "pending" ? "bg-normal text-hard" : ""} ${bid?.status === "progress" ? "bg-orange-500 text-white" : ""} ${bid?.status === "complete" ? "bg-green-500 text-white" : ""} ${bid?.status === "cancel" ? "bg-red-500 text-white" : ""} text-center px-2 rounded-lg py-1 capitalize`}>{bid?.status}</p>
              </td>
              <td className="pl-8">
                <Link href={`/seller/order/${bid?._id}`} className="cursor-pointer">
                  <SlEye size={17} />
                </Link>
              </td>
            </tr>
    );
};

export default OrderList;