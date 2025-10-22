"use client";

import { useState } from "react";

export const categories: string[] = [
    "Patient Monitoring", "Surgical Instruments", "Imaging Devices", "Diagnostic Equipment", "Laboratory Equipment", "Hospital Furniture", "Dental Equipment", "Cardiology Equipment", "Orthopedic Devices", "In-vitro Diagnostic Kits"
]

const CollectibleProducts = ({setSearch}: {setSearch: any}) => {
    const [currentCategory, setCurrentCategory] = useState("");
    const handleSelectCategory = (category: string) =>{
        setSearch(category);
        setCurrentCategory(category);
    }
    return (
        <div className='md:space-y-7 mt-7 space-y-4 text-title sticky top-32'>
            <h2 className='text-xl md:text-2xl font-bold'>Collectible Products</h2>
            <h4 className='text-[20px]'>All Category</h4>
            <div className='bg-normal flex flex-col items-center rounded-lg py-5 md:gap-7 gap-5 text-[15px] px-2 md:px-3 lg:px-0'>
                {
                    categories.map((category, index) =>
                        <button onClick={() =>handleSelectCategory(category)} className={`whitespace-nowrap cursor-pointer ${category === currentCategory ? "text-hard" : ""}`} key={index}>
                            {category}
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default CollectibleProducts;