"use client";
import React from "react";
import ProfileMenu from "./ProfileMenu";
import ProfileHeader from "../shared/ProfileHeader";
import { usePathname } from "next/navigation";
import profileHeaderData, { TProfileHeaderData } from "../data/profileHeader";

const layout = ({children}: {children: React.ReactNode}) => {
    const pathName = usePathname();
    const currentPageData = profileHeaderData.find(data => data?.pathName === pathName) as TProfileHeaderData;
    // console.log(currentPageData);
    return (
        <div className="md:flex items-start gap-10 px-4 md:px-14 lg:px-16">
            <div className="md:w-[30%]">
                <ProfileMenu></ProfileMenu>
            </div>
            <div className="w-full">
                <ProfileHeader currentPageData={currentPageData}></ProfileHeader>
                {children}
            </div>
        </div>
    );
};

export default layout;