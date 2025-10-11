import { IoNotificationsOutline } from "react-icons/io5";
import NavigateButton from "./NavigateButton";

const Notification = () => {
    return (
        <div>
            <NavigateButton text={"Notification"}></NavigateButton>
            <div className="md:mt-5 mt-3 space-y-2">
                <div className="flex items-center gap-2 p-2 md:p-3 lg:p-4 border border-hard rounded-sm">
                <p className="p-2 border border-hard rounded-full text-hard">
                    <IoNotificationsOutline className="text-lg md:text-xl lg:text-2xl"/>
                </p>
                <div className="text-title">
                    <h3 className="text-[16px]">You have a new message from New Event</h3>
                    <p className="text-[13px]">2 min ago</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Notification;