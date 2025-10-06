"use client";
import React from 'react';
import profileMenuLinks from '../data/profileMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdDoubleArrow } from "react-icons/md";
import Swal from 'sweetalert2';
import "../styles/sweetAlertButton.css"


const ProfileMenu = () => {
    const pathName = usePathname();
    // console.log(pathName);
    const handleLogOut = () =>{
        console.log("logout");
        Swal.fire({
  title: "Logout",
  text: "Are you sure you want to log out ?", 
  showCancelButton: true,
  cancelButtonText: "No",
  confirmButtonText: "Yes",
  customClass: {
    cancelButton: "custom-cancel-button",
    confirmButton: "custom-confirm-button"
  }
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire("Logout successfully", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});
    }
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
                    <button onClick={handleLogOut} className='cursor-pointer'>Logout</button>
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
                            <button onClick={handleLogOut} className='cursor-pointer'>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileMenu;