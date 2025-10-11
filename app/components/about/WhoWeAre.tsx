import React from 'react';

const WhoWeAre = () => {
    return (
        <div className='flex md:flex-row flex-col gap-5 text-title'>
            <div className='w-full md:w-1/2 md:space-y-3 space-y-2'>
                <h2 className='text-3xl md:text-4xl lg:text-[43px] font-bold'>Who <span className='text-hard'>We</span> Are</h2>
                <p className='md:text-lg text-[15px] font-light'>At Mst & Associate, we specialize in delivering high-quality, reliable medical equipment to healthcare professionals and institutions worldwide. With a strong commitment to excellence, we aim to support better patient care by ensuring access to trusted, advanced technology.</p>
                <p className='md:text-lg text-[15px] font-light'>To empower healthcare providers with dependable medical solutions that enhance diagnostics, improve efficiency, and elevate patient outcomes.</p>
            </div>
            <div className='w-full md:w-1/2 flex flex-col md:flex-row gap-3'>
                <div className='space-y-3'>
                    <div className={`p-3 text-center bg-normal border border-b-8 border-hard rounded-xl`}>
                    <h3 className='font-bold text-lg'>Integrity</h3>
                    <p className='text-[15px] font-light'>We stand by our commitment to honesty and transparency.</p>
                </div>
                <div className={`p-3 text-center bg-normal border border-b-8 border-hard rounded-xl`}>
                    <h3 className='font-bold text-lg'>Support</h3>
                    <p className='text-[15px] font-light'>We stand by our commitment to honesty and transparency.</p>
                </div>
                </div>
                <div className='md:mt-14 space-y-3'>
                    <div className={`p-3 text-center bg-normal border border-b-8 border-hard rounded-xl`}>
                    <h3 className='font-bold text-lg'>Quality</h3>
                    <p className='text-[15px] font-light'>We stand by our commitment to honesty and transparency.</p>
                </div>
                <div className={`p-3 text-center bg-normal border border-b-8 border-hard rounded-xl`}>
                    <h3 className='font-bold text-lg'>Innovation</h3>
                    <p className='text-[15px] font-light'>We embrace new technology that enhances modern healthcare.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;