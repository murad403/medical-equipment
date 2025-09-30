import Image from 'next/image';
import logo from "../../../public/logo.png";
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='mx-4 md:mx-14 lg:mx-16 rounded-t-lg'>
            <div className='bg-[#48B1DB40] flex flex-col md:flex-row justify-around items-center gap-10 md:gap-0 py-6 md:py-12 mt-64 sm:mt-0 md:mt-16 px-7 md:px-0'>
            <div className='md:w-1/2 sm:w-full w-full flex flex-col sm:flex-row gap-10 md:gap-0 justify-around md:items-center'>
                <div className='space-y-2 flex flex-col items-center'>
                <Image className='md:w-[200px] w-[80px]' src={logo} alt='logo'></Image>
                <h3 className='font-bold text-[22px]'>MST & ASSOCIATES</h3>
                <p className='text-sm font-light text-center'>Your medical equipment <br /> specialists</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-bold text-[22px]'>About Us</h3>
                <Link className='text-sm' href={"/"}>About</Link>
                <Link className='text-sm' href={"/"}>User Agreement</Link>
                <Link className='text-sm' href={"/"}>Contact Us</Link>
            </div>
            </div>
            <div className='md:w-1/2 sm:w-full w-full flex flex-col sm:flex-row gap-10 md:gap-0 justify-around md:items-center'>
                <div className='flex flex-col gap-2'>
                <h3 className='font-bold text-[22px]'>Legal</h3>
                <Link className='text-sm' href={"/"}>Terms of Condition</Link>
                <Link className='text-sm' href={"/"}>Privacy Policy</Link>
                <Link className='text-sm' href={"/"}>Vendor  Agreement</Link>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-bold text-[22px]'>Contact Us</h3>
                <p className='text-sm'>MedAuctionHub</p>
                <p className='text-sm'>123 HealthTech Street,</p>
                <p className='text-sm'>New York, NY 10001, USA</p>
                <p className='text-sm'>Phone <br /> +1 (800) 456-7890 <br /> (Mon–Fri, 9 AM – 6 PM EST)</p>
            </div>
            </div>
        </div>
        <p className='bg-primary text-center font-bold text-[16px] text-white py-2'>©{new Date().getFullYear()}MedAuctionHub. All rights reserved. | Powered by MedAuctionHub</p>
        </div>
    );
};

export default Footer;