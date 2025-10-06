import { IoMdNotificationsOutline } from "react-icons/io";
import user from "../../../public/user.jpg";
import Image from "next/image";

const SellerHeading = () => {
    return (
        <div className='bg-hard py-3 md:px-5 px-3 flex w-full items-center md:justify-end justify-between'>
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