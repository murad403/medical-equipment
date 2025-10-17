"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from "../../../public/slider1.jpg";
import slider2 from "../../../public/slider2.jpg";
import slider3 from "../../../public/slider3.jpg";
import slider4 from "../../../public/slider4.jpg";
import Link from 'next/link';
import Image from 'next/image';

const imageGroup: any[] = [
  slider1, slider2, slider3, slider4
]

const Banner = () => {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="">
        {
          imageGroup.map((image, index) =>
            <SwiperSlide key={index}>
          <div className='relative'>
            <Image className='min-h-[280px]' src={image} alt='slider'></Image>
            <div className='absolute top-1/2 left-3 md:left-12 lg:left-16 -translate-y-1/2 md:w-[55%] space-y-3 md:space-y-5'>
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-extrabold text-white'>Empowering <span className='md:text-2xl text-xl'>Healthcare with the Right Equipment,</span> Right Where It Matters Most</h1>
                <p className='text-sm md:text-[16px] lg:text-xl text-white'>Trusted platform for hospitals, labs, and individuals to trade medical devices securely.</p>
                <Link href={'/auctions'} className='bg-normal text-hard text-sm py-2 px-4 rounded-lg'>See All Equipment</Link>
            </div>
          </div>
        </SwiperSlide>
          )
        }
      </Swiper>
    );
};

export default Banner;