import React from 'react';

const CollectibleProducts = () => {
    return (
        <div className='md:space-y-7 mt-7 space-y-4 text-title sticky top-32'>
            <h2 className='text-xl md:text-2xl font-bold'>Collectible Products</h2>
            <h4 className='text-[20px]'>All Category</h4>
            <div className='bg-normal flex flex-col items-center rounded-lg py-5 md:gap-7 gap-5 text-[15px] px-2 md:px-3 lg:px-0'>
                {
                    categories.map((category, index) =>
                        <p className='whitespace-nowrap' key={index}>
                            {category}
                        </p>
                    )
                }
            </div>
        </div>
    );
};
const categories = [
    "Patient Monitoring", "Surgical Instruments", "Imaging Devices", "Diagnostic Equipment", "Diagnostic Equipment", "Diagnostic Equipment", "Diagnostic Equipment"
]

export default CollectibleProducts;