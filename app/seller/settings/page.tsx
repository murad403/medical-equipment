import NavigateButton from "@/app/shared/NavigateButton";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const page = () =>{
    return (
        <div>
            <NavigateButton text={"settings"}></NavigateButton>
            <div className="md:mt-4 mt-3 text-title *:bg-normal *:p-3 *:rounded-lg *:hover:border *:border-hard space-y-2 *:hover:bg-hard md:space-y-3">
                <Link className="flex justify-between items-center text-lg md:text-xl" href={"/seller/settings/personal-information"}>
                    <p>Personal Information</p>
                    <IoIosArrowForward/>
                </Link>
                <Link className="flex justify-between items-center text-lg md:text-xl" href={"/seller/settings/change-password"}>
                    <p>Change Password</p>
                    <IoIosArrowForward/>
                </Link>
            </div>
        </div>
    )
}

export default page;