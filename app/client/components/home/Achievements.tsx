import React from 'react';
import achievements from '../../data/achievements';
import Image from 'next/image';
import banner from "../../../../public/achievements/banner.jpg";

const Achievements = () => {
    return (
        <div style={{backgroundImage: `url(${banner.src})`, backdropFilter: "blur(100px)"}} className='mt-24 py-5 bg-no-repeat bg-center bg-cover relative'>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center">Trusted by <span className="text-black">Professionals Worldwide</span></h2>
            <p className="font-medium text-[15px] text-black text-center">Our platform connects thousands of buyers and sellers in the medical industry. <br /> Here's a look at the impact we've made so far</p>
            <div  className='mt-7 grid grid-cols-2 lg:grid-cols-4 justify-between items-center gap-12 lg:gap-0  py-7'>
                {
                    achievements.map(achievement =>
                        <div className='flex flex-col justify-center items-center md:gap-3 gap-1' key={achievement?.id}>
                            <Image className='w-[94px]' width={94} src={achievement?.icon} alt={achievement?.title}></Image>
                            <h2 className='text-primary font-bold text-2xl md:text-3xl lg:text-4xl'>{achievement?.score.toLocaleString()}+</h2>
                            <p className='text-[#101010] text-[15px]'>{achievement?.title}</p>
                        </div>
                    )
                }
            </div>
            <div className='absolute w-full h-full bg-gradient-to-b from-white to-[#99DFFFE4] top-0 opacity-50'>
            </div>
        </div>
    );
};

export default Achievements;