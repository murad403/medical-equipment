"use client";
import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image";
import sellerMenu from "../seller-data/sellerMenu";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LogoutModal from "@/app/shared/LogoutModal";

const SellerMenu = () => {
    const pathName = usePathname();
    const [active, setActive] = useState(pathName);
    return (
        <div className="bg-gradient-to-t flex flex-col justify-between to-normal from-hard py-5 px-5 min-h-screen sticky top-0">
            <ul className="space-y-4">
                <li className="mb-10">
                    <Link className="flex justify-center" href={"/"}>
                        <Image className="w-[130px] h-[130px]" src={logo} alt="logo"></Image>
                    </Link>
                </li>
                {
                    sellerMenu.map(link =>
                        <li key={link?.path}>
                            <Link onClick={() =>setActive(link.route)} className={`flex gap-3 px-3 rounded-xl items-center text-[16px] font-medium py-1 ${active === link.route ? "bg-hard text-white" : "text-title"}`} href={link?.route}>{link?.icon && <link.icon/>}{link?.path}</Link>
                            {
                                link?.product && 
                                <ul className={`${active === "/seller/product" ? "block" : "hidden"} space-y-2 mt-2`}>
                                    {
                                        link?.product.map(link =>
                                            <li key={link?.path}>
                                                <Link onClick={() =>setActive(link.route)} className={`ml-14 flex gap-3 px-3 rounded-xl items-center text-sm font-medium py-1 ${active === link.route ? "bg-hard text-white" : "text-title"}`} href={link?.route}>{link?.icon && <link.icon/>}{link?.path}</Link>
                                            </li>
                                        )
                                    }
                                </ul>
                            }
                        </li>
                    )
                }
            </ul>
            <LogoutModal></LogoutModal>
        </div>
    );
};

export default SellerMenu;