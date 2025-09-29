"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from "../../../../public/slider1.jpg";
import slider2 from "../../../../public/slider2.jpg";
import slider3 from "../../../../public/slider3.jpg";
import slider4 from "../../../../public/slider4.jpg";
import Link from 'next/link';
import "../../styles/banner.css";

const Banner = () => {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className='w-full sliderResponsive bg-cover bg-center' style={{
          backgroundImage: `url(${slider1.src})`
        }}>
            <div className='h-full flex flex-col items-start md:w-[55%] justify-center lg:ml-17 md:ml-10 gap-3 md:gap-7 px-3 md:px-0 py-10'>
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-extrabold text-white'>Empowering <span className='md:text-2xl text-xl'>Healthcare with the Right Equipment,</span> Right Where It Matters Most</h1>
                <p className='text-sm text-white'>Trusted platform for hospitals, labs, and individuals to trade medical devices securely.</p>
                <Link href={'/'} className='bg-normal text-primary text-sm py-2 px-4 rounded-lg'>See All Equipment</Link>
            </div>
            
        </SwiperSlide>
        <SwiperSlide className='w-full sliderResponsive bg-cover bg-center' style={{
          backgroundImage: `url(${slider2.src})`
        }}>
            <div className='h-full flex flex-col items-start md:w-[55%] justify-center lg:ml-17 md:ml-10 gap-3 md:gap-7 px-3 md:px-0 py-10'>
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-extrabold text-white'>Empowering <span className='md:text-2xl text-xl'>Healthcare with the Right Equipment,</span> Right Where It Matters Most</h1>
                <p className='text-sm text-white'>Trusted platform for hospitals, labs, and individuals to trade medical devices securely.</p>
                <Link href={'/'} className='bg-normal text-primary text-sm py-2 px-4 rounded-lg'>See All Equipment</Link>
            </div>
            
        </SwiperSlide>
        <SwiperSlide className='w-full sliderResponsive bg-cover bg-center' style={{
          backgroundImage: `url(${slider3.src})`
        }}>
            <div className='h-full flex flex-col items-start md:w-[55%] justify-center lg:ml-17 md:ml-10 gap-3 md:gap-7 px-3 md:px-0 py-10'>
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-extrabold text-white'>Empowering <span className='md:text-2xl text-xl'>Healthcare with the Right Equipment,</span> Right Where It Matters Most</h1>
                <p className='text-sm text-white'>Trusted platform for hospitals, labs, and individuals to trade medical devices securely.</p>
                <Link href={'/'} className='bg-normal text-primary text-sm py-2 px-4 rounded-lg'>See All Equipment</Link>
            </div>
            
        </SwiperSlide>
        <SwiperSlide className='w-full sliderResponsive bg-cover bg-center' style={{
          backgroundImage: `url(${slider4.src})`
        }}>
            <div className='h-full flex flex-col items-start md:w-[55%] justify-center lg:ml-17 md:ml-10 gap-3 md:gap-7 px-3 md:px-0 py-10'>
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-extrabold text-white'>Empowering <span className='md:text-2xl text-xl'>Healthcare with the Right Equipment,</span> Right Where It Matters Most</h1>
                <p className='text-sm text-white'>Trusted platform for hospitals, labs, and individuals to trade medical devices securely.</p>
                <Link href={'/'} className='bg-normal text-primary text-sm py-2 px-4 rounded-lg'>See All Equipment</Link>
            </div>
            
        </SwiperSlide>
      </Swiper>
    );
};

export default Banner;