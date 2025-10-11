import Image from 'next/image';
import logo from "../../public/logo.png";
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='mx-4 md:mx-14 lg:mx-16 rounded-t-lg text-title'>
            <div className='bg-[#48B1DB40] flex flex-col lg:flex-row justify-around items-center gap-10 md:gap-0 py-6 md:py-12 mt-6 sm:mt-0 md:mt-16 px-7 md:px-0'>
            <div className='lg:w-1/2 w-full flex flex-col sm:flex-row gap-10 md:gap-0 sm:justify-around lg:justify-around md:items-center'>
                <div className='space-y-2 flex flex-col items-center'>
                <Image className='md:w-[200px] w-[80px]' src={logo} alt='logo'></Image>
                <h3 className='font-bold text-[22px]'>MST & ASSOCIATES</h3>
                <p className='text-sm font-light text-center md:text-[15px]'>Your medical equipment <br /> specialists</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-bold text-[22px]'>About Us</h3>
                <Link className='text-sm md:text-[15px]' href={"/about"}>About</Link>
                <Link className='text-sm md:text-[15px]' href={"/user-agreement"}>User Agreement</Link>
                <Link className='text-sm md:text-[15px]' href={"/contact"}>Contact Us</Link>
            </div>
            </div>
            <div className='lg:w-1/2 w-full flex flex-col sm:flex-row gap-10 md:gap-0 sm:justify-around lg:justify-around md:items-center'>
                <div className='flex flex-col gap-2'>
                <h3 className='font-bold text-[22px]'>Legal</h3>
                <Link className='text-sm md:text-[15px]' href={"/terms-and-condition"}>Terms of Condition</Link>
                <Link className='text-sm md:text-[15px]' href={"/privacy-policy"}>Privacy Policy</Link>
                <Link className='text-sm md:text-[15px]' href={"/vendor-agreement"}>Vendor  Agreement</Link>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-bold text-[22px]'>Contact Us</h3>
                <p className='text-sm md:text-[15px]'>MedAuctionHub</p>
                <p className='text-sm md:text-[15px]'>123 HealthTech Street,</p>
                <p className='text-sm md:text-[15px]'>New York, NY 10001, USA</p>
                <p className='text-sm md:text-[15px]'>+1 (800) 456-7890</p>
                <p className='text-sm md:text-[15px]'>(Mon–Fri, 9 AM – 6 PM EST)</p>
            </div>
            </div>
        </div>
        <p className='bg-hard text-center font-bold text-[16px] text-white py-2'>©{new Date().getFullYear()}MedAuctionHub. All rights reserved. | Powered by MedAuctionHub</p>
        </div>
    );
};

export default Footer;