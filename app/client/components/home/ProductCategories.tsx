import React from "react";
import productCategories from "../../data/categories";
import Image from "next/image";

const ProductCategories = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        Product <span className="text-primary">Categories</span>
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-20 md:mt-20 mt-14">
        {productCategories.map((category) => (
            <div key={category?.id}
              className="bg-[#E8E9E975] flex justify-center items-center flex-col rounded-[32px] w-[230px] h-[230px] rotate-[45deg] relative"
            >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col -rotate-[45deg] justify-center items-center gap-3">
                <Image
                className=""
                width={63}
                height={60}
                src={category?.img}
                alt={category?.title}
              ></Image>
              <p className="font-medium text-[15px] text-black">
                {category?.title}
              </p>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
