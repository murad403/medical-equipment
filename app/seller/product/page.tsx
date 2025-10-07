"use client";
import NavigateButton from "@/app/shared/NavigateButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoCloudUploadOutline } from "react-icons/io5";

type TInputs = {
    title: string;
    bidDateTime: string;
    category: number;
    price: number;
    image: string;
    description: string;
}

const page = () => {
    const { register, handleSubmit, watch, formState: { errors }} = useForm<TInputs>()
    const onSubmit: SubmitHandler<TInputs> = (data) =>{
      console.log(data);
    }
    return (
        <div>
            <NavigateButton text={"Upload product"}></NavigateButton>
            <div className="flex justify-center mt-3 md:mt-4">
                <form className="space-y-3 w-full md:w-[80%] bg-normal rounded-xl md:p-5 p-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col md:flex-row md:gap-5 gap-3 items-center">
                        <div className="w-full">
                            <label className="text-sm font-medium block mb-1">Product Title</label>
                            <input type="text" className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Type product title" {...register("title", {required: true})} />
                            {errors.title && <span>Product title is required</span>}
                        </div>
                        <div className="w-full">
                            <label className="text-sm font-medium block mb-1">Product Bid Date & Time</label>
                            <input type="date" className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Type product bid date & time" {...register("bidDateTime", {required: true})} />
                            {errors.bidDateTime && <span>Product bid date & time is required</span>}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-5 gap-3 items-center">
                        <div className="w-full">
                            <label className="text-sm font-medium block mb-1">Product Category</label>
                            <input type="text" className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Type product category" {...register("category", {required: true})} />
                            {errors.category && <span>Product category is required</span>}
                        </div>
                        <div className="w-full">
                            <label className="text-sm font-medium block mb-1">Product Price</label>
                            <input type="number" className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Type product price" {...register("price", {required: true})} />
                            {errors.price && <span>Product price is required</span>}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-5 gap-3 items-center">
                        <div className="md:w-1/2 w-full">
                            <label className="text-sm font-medium block mb-1">Message</label>
                            <textarea className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Type product description" {...register("description", {required: true})} />
                            {errors.description && <span>Product description is required</span>}
                        </div>
                        <div className="w-full md:w-1/2 border border-hard rounded-lg py-7 flex items-center justify-center gap-7">
                                                <div className="flex items-center gap-2 text-hard">
                                                    <label htmlFor="image" className="cursor-pointer ">
                                                        <IoCloudUploadOutline size={30}/>
                                                    </label>
                                                    <p >Upload a image</p>
                                                </div>
                                                <input id="image" type="file" className="hidden" {...register("image", {required: true})} />
                                                {errors.image && <span>Image is required</span>}
                                            </div>
                    </div>
                    <div className="">
                        <button className="bg-hard py-2 px-5 rounded-lg text-white" type="submit">Upload</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;