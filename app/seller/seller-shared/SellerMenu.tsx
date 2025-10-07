"use client";
import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image";
import sellerMenu from "../seller-data/sellerMenu";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { TbLogout } from "react-icons/tb";

const SellerMenu = () => {
    const pathName = usePathname();
    const [active, setActive] = useState(pathName);
    return (
        <div className="bg-gradient-to-t flex flex-col justify-between to-normal from-hard py-5 px-5 min-h-full">
            <ul className="space-y-4">
                <li className="mb-10">
                    <Link className="flex justify-center" href={"/"}>
                        <Image className="w-[130px] h-[130px]" src={logo} alt="logo"></Image>
                    </Link>
                </li>
                {
                    sellerMenu.map(link =>
                        <li key={link?.path}>
                            <Link onClick={() =>setActive(link.route)} className={`flex gap-3 px-3 rounded-xl items-center text-[16px] font-medium py-1 ${active === link.route ? "bg-hard text-white" : ""}`} href={link?.route}>{link?.icon && <link.icon/>}{link?.path}</Link>
                        </li>
                    )
                }
            </ul>
            <button className="flex items-center gap-5 w-full bg-normal cursor-pointer justify-center py-2 rounded-xl">
                <TbLogout/>
                <span>Logout</span>
            </button>
        </div>
    );
};

export default SellerMenu;