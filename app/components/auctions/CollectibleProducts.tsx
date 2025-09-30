import React from 'react';

const CollectibleProducts = () => {
    return (
        <div className='space-y-7 mt-7'>
            <h2 className='text-xl md:text-2xl font-bold'>Collectible Products</h2>
            <h4 className='text-[20px]'>All Category</h4>
            <div className='bg-normal flex flex-col items-center rounded-lg py-5 gap-7 text-[15px]'>
                {
                    categories.map((category, index) =>
                        <p key={index}>
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