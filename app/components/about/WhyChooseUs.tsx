import whyChooseUs from "@/app/data/whyChooseUs";
import wave from "../../../public/wave.png";
import Image from "next/image";

const WhyChooseUs = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className='text-3xl md:text-4xl lg:text-[43px] text-center font-bold text-title'>Why <span className='text-hard'>Choose</span> Us</h2>
            <div className='flex md:items-center md:mt-20 mt-2 gap-2 md:gap-0 md:mb-12 md:flex-row flex-col'>
                  {
                    whyChooseUs.map(reason =>
                        <div className="flex items-center gap-2" key={reason?.id}>
                            <Image className="w-[220px] hidden md:block" src={wave} alt="wave image"></Image>
                            <div className="bg-normal md:p-4 p-2 rounded-full md:relative">
                                <div className="bg-hard md:p-2 p-1 rounded-full">
                                    <p className="md:text-2xl text-xl text-white">{reason?.icon && <reason.icon/>}</p>
                                </div>
                                <p className={`md:absolute md:block hidden -right-1/2 text-title ${(reason?.id === 1 || reason?.id === 2) ? "-top-7" : "top-[85px]"} whitespace-nowrap`}>{reason?.title}</p>
                            </div>
                            <p className="md:hidden block text-title">{reason?.title}</p>
                        </div>
                    )
                  }
            </div>
        </div>
    );
};

export default WhyChooseUs;