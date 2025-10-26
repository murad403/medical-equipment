import React from 'react';
import { TProfileHeaderData } from '../data/profileHeader';
import { useAppSelector } from '../redux/hook';

type TProfileHeaderProps = {
    currentPageData: TProfileHeaderData;
}

const ProfileHeader: React.FC<TProfileHeaderProps> = ({currentPageData}) => {
    const {user} = useAppSelector(state => state.user);
    // console.log(user);
    return (
        <div className='bg-gradient-to-l rounded-lg rounded-tl-4xl px-6 py-3 to-hard from-normal flex items-center md:gap-10 gap-6'>
        <img className='md:w-28 md:h-28 w-16 h-16 rounded-full' alt={"ad"} src={user?.photo}></img>
            <div className='text-white'>
                <h2 className='text-xl md:text-2xl lg:text-3xl'>{currentPageData?.title}</h2>
                <p className='lg:text-[16px] text-sm'>{currentPageData?.description}</p>
            </div>
        </div>
    );
};

export default ProfileHeader;