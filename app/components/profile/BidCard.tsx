import Image from "next/image";
import product from "../../../public/product.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";

const BidCard = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 p-3 border border-hard rounded-xl">
            <Image className="w-full" src={product} alt="product"></Image>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl">GE Vivid S70 Ultrasound Machine</h3>
                    <button className="cursor-pointer">
                        <RiDeleteBin6Line/>
                    </button>
                </div>
                <p className="font-light text-[15px]">Advanced cardiovascular ultrasound system with crystal-clear imaging and intuitive workflow. Combines high performance with portability for efficient diagnostics anytime, anywhere.</p>
                <h3 className="font-bold text-xl">$200</h3>
                <h4 className="text-[17px]">My Bid Amount : $210</h4>
                <h4 className="text-[17px] text-gray-700">My Bid Amount : $205</h4>
                <h3 className="text-lg">Bid Time : 11 oct 24, 11.10PM</h3>
                <div>
                    <h3 className="text-lg">New York,US</h3>
                </div>
            </div>
        </div>
    );
};

export default BidCard;