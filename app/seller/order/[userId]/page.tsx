import NavigateButton from "@/app/shared/NavigateButton";
import Image from "next/image";
import React from "react";
import user from "../../../../public/user.jpg";

const page = () => {
  return (
    <div>
      <NavigateButton text={"user order details"}></NavigateButton>
      <div className="flex justify-center mt-3 md:mt-4">
        <div className="w-full md:w-[80%]">
        <div className="flex items-center gap-4">
          <Image
            className="w-[90px] h-[90px] rounded-full"
            src={user}
            alt="user"
          ></Image>
          <h3 className="font-medium text-xl">Mr. Bashar islam</h3>
        </div>
        <div className="*:flex *:justify-between *:items-center *:md:py-3 *:py-2 *:border-b-2 *:border-blue-200">
          <div>
            <h3 className="font-medium md:text-lg text-[16px]">Name</h3>
            <p className="md:text-[15px] text-[13px]">Bashar islam</p>
          </div>
          <div>
            <h3 className="font-medium md:text-lg text-[16px]">Email</h3>
            <p className="md:text-[15px] text-[13px]">info@gmail.com</p>
          </div>
          <div>
            <h3 className="font-medium md:text-lg text-[16px]">Phone Number</h3>
            <p className="md:text-[15px] text-[13px]">343434343</p>
          </div>
          <div>
            <h3 className="font-medium md:text-lg text-[16px]">Product Name</h3>
            <p className="md:text-[15px] text-[13px]">GE Vivid S70 Ultrasound Machine</p>
          </div>
          <div>
            <h3 className="font-medium md:text-lg text-[16px]">Bid Price</h3>
            <p className="md:text-[15px] text-[13px]">$203</p>
          </div>
          <div>
            <h3 className="font-medium md:text-lg text-[16px]">Bid Time & Date</h3>
            <p className="md:text-[15px] text-[13px]">11 oct 24, 11.10PM</p>
          </div>
          <div>
            <h3 className="font-medium md:text-lg text-[16px]">Location</h3>
            <p className="md:text-[15px] text-[13px]">Dhaka</p>
          </div>

        </div>
        <div className="flex justify-end items-center md:mt-5 mt-3">
            <button className="bg-hard text-white font-semibold py-2 px-5 rounded-xl">Sending Product</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default page;
