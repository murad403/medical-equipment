import Image from "next/image";
import user from "../../../public/product.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";

const CompleteBidCard = ({bid}: {bid: any}) => {
    
    const handleDeleteCard = () =>{
        console.log("dlete");
    }
    return (
        <div className="px-4 py-3 bg-normal rounded-xl text-title">
            <div className="flex justify-end">
                <button onClick={handleDeleteCard} className="cursor-pointer">
                    <RiDeleteBin6Line/>
                </button>
            </div>
            <div className="flex flex-col md:flex-row gap-7 justify-between">
                <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4">
                    <Image className="w-[90px] h-[90px] rounded-full" src={user} alt="user"></Image>
                    <h3 className="font-medium text-xl">Mr. Bashar islam</h3>
                </div>
                <div className="*:flex *:justify-between *:items-center *:md:py-4 *:py-3 *:border-b-2 *:border-blue-200">
                    <div>
                        <h3 className="font-medium text-lg">Name</h3>
                        <p className="text-[15px]">Bashar islam</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg">Email</h3>
                        <p className="text-[15px]">info@gmail.com</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg">Phone Number</h3>
                        <p className="text-[15px]">343434343</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg">Product Name</h3>
                        <p className="text-[15px]">GE Vivid S70 Ultrasound Machine</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg">Bid Price</h3>
                        <p className="text-[15px]">$203</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg">Bid Time & Date</h3>
                        <p className="text-[15px]">11 oct 24, 11.10PM</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg">Location</h3>
                        <p className="text-[15px]">Dhaka</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg">Order Number</h3>
                        <p className="text-[15px]">09</p>
                    </div>
                    <div className="border-none">
                        <h3 className="font-medium text-lg">Delivery Method</h3>
                        <p className="text-[15px]">UPS</p>
                    </div>
                </div>
                </div>
                <div className="w-[2px] bg-hard hidden md:block"></div>
                <div className="md:w-[2px] block md:hidden md:h-full bg-hard h-[2px]"></div>
                <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4">
                    <Image className="w-[90px] h-[90px] rounded-full" src={user} alt="user"></Image>
                    <h3 className="font-medium text-xl">Mr. Murad</h3>
                </div>
                <div className="*:flex *:justify-between *:items-center *:md:py-4 *:py-3 *:border-b-2 *:border-blue-200">
                    <div>
                        <h3 className="font-medium text-lg">Name</h3>
                        <p className="text-[15px]">Bashar islam</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg">Email</h3>
                        <p className="text-[15px]">info@gmail.com</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg">Phone Number</h3>
                        <p className="text-[15px]">343434343</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg">Product Price</h3>
                        <p className="text-[15px]">$959</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg">Location</h3>
                        <p className="text-[15px]">Dhaka</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg">Uploaded Date</h3>
                        <p className="text-[15px]">11 oct 24, 11.10PM</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg">Order Number</h3>
                        <p className="text-[15px]">09</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg">Delivery Date</h3>
                        <p className="text-[15px]">12 oct 24, 11.10PM</p>
                    </div>
                    <div className="border-none">
                        <h3 className="font-medium text-lg">Delivery Method</h3>
                        <p className="text-[15px]">UPS</p>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default CompleteBidCard;