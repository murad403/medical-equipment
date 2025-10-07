"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

const NavigateButton = ({text}: any) => {
    const router = useRouter();
    return (
        <div className="flex items-center gap-3">
            <button onClick={() => router.back()} className="cursor-pointer">
                <IoIosArrowBack size={20}/>
            </button>
            <h3 className="font-semibold md:text-2xl text-xl capitalize">{text}</h3>
        </div>
    );
};

export default NavigateButton;