import Image from 'next/image';
import banner from "../../../public/achievements/banner.jpg";
import achievements from '@/app/data/achievements';

const Achievements = () => {
    return (
        <div className='py-5 relative'>
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-hard text-center">Trusted by <span className="text-black">Professionals Worldwide</span></h2>
            <p className="font-medium md:text-[15px] text-[13px] text-black text-center">Our platform connects thousands of buyers and sellers in the medical industry. <br /> Here's a look at the impact we've made so far</p>
            <div style={{backgroundImage: `url(${banner.src})`}} className='mt-7 grid grid-cols-2 lg:grid-cols-4 justify-between items-center gap-12 lg:gap-0 bg-no-repeat bg-center bg-cover py-7'>
                {
                    achievements.map(achievement =>
                        <div className='flex flex-col justify-center items-center md:gap-3 gap-1' key={achievement?.id}>
                            <Image width={74} src={achievement?.icon} alt={achievement?.title}></Image>
                            <h2 className='text-hard font-bold text-2xl md:text-3xl lg:text-4xl'>{achievement?.score.toLocaleString()}+</h2>
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