"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

const Notification = () => {
    const router = useRouter();
    return (
        <div>
            <div className="flex items-center gap-3">
                <button onClick={() => router.back()} className="cursor-pointer">
                    <IoIosArrowBack size={20}/>
                </button>
                <h3 className="font-semibold md:text-2xl text-xl">Notification</h3>
            </div>
            <div className="md:mt-5 mt-3 space-y-2">
                <div className="flex items-center gap-2 p-2 border border-hard rounded-sm">
                <p className="p-2 border border-hard rounded-full">
                    <IoNotificationsOutline size={17}/>
                </p>
                <div>
                    <h3 className="text-[16px]">You have a new message from New Event</h3>
                    <p className="text-[13px]">2 min ago</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Notification;