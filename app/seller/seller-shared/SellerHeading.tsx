"use client";
import { IoMdNotificationsOutline } from "react-icons/io";
import user from "../../../public/user.jpg";
import Image from "next/image";
import { RiMenu2Line } from "react-icons/ri";
import sellerMenu from "../seller-data/sellerMenu";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TbLogout } from "react-icons/tb";

const SellerHeading = () => {
    const pathName = usePathname();
    const [active, setActive] = useState(pathName);
    return (
        <div className='bg-hard py-3 md:px-5 px-3 flex w-full items-center md:justify-end justify-between'>
            <div className="block md:hidden">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                  <label htmlFor="my-drawer">
                    <RiMenu2Line size={25}/>
                  </label>
                </div>
                <div className="drawer-side">
                  <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu min-h-full bg-gradient-to-t space-y-3 py-10 to-normal from-hard">
                    {
                    sellerMenu.map(link =>
                        <li key={link?.path}>
                            <Link onClick={() =>setActive(link.route)} className={`flex gap-3 px-3 rounded-xl items-center text-[16px] font-medium py-1 ${active === link.route ? "bg-hard text-white" : ""}`} href={link?.route}>{link?.icon && <link.icon/>}{link?.path}</Link>
                        </li>
                    )
                    }
                    <li>
                        <button className="flex items-center gap-3 w-full bg-normal cursor-pointer justify-center py-2 rounded-xl">
                                        <TbLogout/>
                                        <span>Logout</span>
                                    </button>
                    </li>
                  </ul>
                </div>
            </div>
            <div className="flex items-center md:gap-3 gap-2">
                <button className="bg-normal text-hard cursor-pointer p-3 rounded-full">
                    <IoMdNotificationsOutline size={20}/>
                </button>
                <Image className="w-10 h-10 rounded-full" src={user} alt="seller"></Image>
                <div className="text-white">
                    <h3 className="text-[17px] font-medium">Md Murad</h3>
                    <p className="text-sm">Admin</p>
                </div>
            </div>
        </div>
    );
};

export default SellerHeading;