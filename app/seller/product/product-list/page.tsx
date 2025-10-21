import NavigateButton from "@/app/shared/NavigateButton";
import product from "../../../../public/product.jpg";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import Link from "next/link";

const page = () =>{
    return (
        <div>
            <div className="flex items-center gap-3">
                <NavigateButton text={"List of all products"}></NavigateButton>
                <h3 className="text-2xl font-bold text-hard">(30)</h3>
            </div>
            <div className="mt-3 md:mt-5 space-y-2 md:space-y-3">
                <div className="p-2 border border-hard rounded-lg text-title flex justify-between items-center" >
                    <div className="flex items-center gap-2">
                        <Image src={product} alt="product" className="w-16 h-14 rounded-lg"></Image>
                    <div className="space-y-1">
                        <h2 className="text-xl md:text-2xl font-semibold">Ge admladfk dfkdflasd</h2>
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold">$300</h3>
                            <p className="bg-normal px-2 text-gray-500 rounded-xl text-[13px] inline-block">pending</p>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <button>
                            <MdDeleteOutline size={20}/>
                        </button>
                        <button className="bg-hard px-3 text-white rounded-2xl">Edit</button>
                    </div>
                </div>
                <div className="p-2 border border-hard rounded-lg text-title flex justify-between items-center" >
                    <div className="flex items-center gap-2">
                        <Image src={product} alt="product" className="w-16 h-14 rounded-lg"></Image>
                    <div className="space-y-1">
                        <h2 className="text-xl md:text-2xl font-semibold">Ge admladfk dfkdflasd</h2>
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold">$300</h3>
                            <p className="bg-normal px-2 text-gray-500 rounded-xl text-[13px] inline-block">pending</p>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <button>
                            <MdDeleteOutline size={20}/>
                        </button>
                        <Link href={`/seller/product/product-list/${"id"}`} className="bg-hard px-3 text-white rounded-2xl">Edit</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;