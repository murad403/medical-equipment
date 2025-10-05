import React from 'react';
import { TProfileHeaderData } from '../data/profileHeader';
import user from "../../public/achievements/client.png";
import Image from 'next/image';

type TProfileHeaderProps = {
    currentPageData: TProfileHeaderData;
}

const ProfileHeader: React.FC<TProfileHeaderProps> = ({currentPageData}) => {
    return (
        <div className='bg-gradient-to-l rounded-lg rounded-tl-4xl px-6 py-3 to-hard from-normal flex items-center md:gap-10 gap-6'>
            <Image className='md:w-32 w-24 rounded-full' src={user} alt="user image"></Image>
            <div className='text-white'>
                <h2 className='text-xl md:text-2xl lg:text-3xl'>{currentPageData?.title}</h2>
                <p className='lg:text-[16px] text-sm'>{currentPageData?.description}</p>
            </div>
        </div>
    );
};

export default ProfileHeader;