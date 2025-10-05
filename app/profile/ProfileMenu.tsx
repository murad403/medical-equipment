"use client";
import React from 'react';
import profileMenuLinks from '../data/profileMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdDoubleArrow } from "react-icons/md";

const ProfileMenu = () => {
    const pathName = usePathname();
    // console.log(pathName);
    return (
        <div className=''>
            <ul className='bg-normal hidden md:flex flex-col items-center py-10 gap-4 rounded-xl text-xl'>
                {
                    profileMenuLinks.map((link, index) =>
                        <li key={index}>
                            <Link className={`${link?.route === pathName ? "text-hard font-semibold" : "font-thin"}`} href={link?.route}>{link?.path}</Link>
                        </li>
                    )
                }
                <li>
                    <button className='cursor-pointer'>Logout</button>
                </li>
            </ul>
            <div className='drawer md:hidden'>
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <label htmlFor="my-drawer" className='inline-block bg-normal p-2 rounded-ful'>
                        <MdDoubleArrow className='text-hard' size={25}/>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="bg-normal text-lg min-h-full w-80 space-y-4 p-4">
                        {
                            profileMenuLinks.map((link, index) =>
                                <li key={index}>
                                    <Link className={`${link?.route === pathName ? "text-hard font-semibold" : "font-thin"}`} href={link?.route}>{link?.path}</Link>
                                </li>
                            )
                        }
                        <li>
                            <button className='cursor-pointer'>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileMenu;