import NavigateButton from "@/app/shared/NavigateButton";
import Link from "next/link";
import React from "react";
import { SlEye } from "react-icons/sl";

const page = () => {
  return (
    <div>
      <NavigateButton text={"user order list"}></NavigateButton>
      <div className="overflow-x-auto md:mt-4 mt-3 rounded-lg border border-hard">
        <table className="table">
          <thead className="">
            <tr className="bg-hard text-[14px] text-white">
              <td>#SL</td>
              <td>Bidder Name</td>
              <td>Email</td>
              <td>Product Name</td>
              <td>Bid Price</td>
              <td>Bid Time & Date</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody className="space-y-3">
            <tr className="border-b border-hard text-title">
              <th>1</th>
              <td>murad</td>
              <td>Control Specialist</td>
              <td>10</td>
              <td>Czech </td>
              <td>9/29/2020</td>
              <td>pending</td>
              <td className="pl-8">
                <Link href={"/seller/order/3434"} className="cursor-pointer">
                  <SlEye size={17} />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
