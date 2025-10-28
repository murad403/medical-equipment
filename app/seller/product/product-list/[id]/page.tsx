"use client";
import { categories } from "@/app/components/auctions/CollectibleProducts";
import ProtectedRoute from "@/app/hooks/ProtectedRoute";
import useGetImage from "@/app/hooks/useGetImage";
import { useGetSellerProductQuery } from "@/app/redux/api/api";
import LoadingSpinner from "@/app/shared/LoadingSpinner";
import NavigateButton from "@/app/shared/NavigateButton";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CiCircleRemove } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";

type TImageFile = {
    id: string;
    image: string;
}
type TInputs = {
    title: string;
    bidDate: string;
    category: string;
    price: number;
    images: File[];
    location: string;
    description: string;
}

const page = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<TInputs>();
    const { data } = useGetSellerProductQuery(undefined);
    const { id } = useParams();
    const currentProduct = data?.data.find((product: any) => product?._id === id);

    const currentProductImages = currentProduct?.images;
    const [images, setImages] = useState<TImageFile[]>([]);
    useEffect(() => {
        if (currentProductImages) {
            setImages(currentProductImages);
        }
    }, [currentProductImages]);
    const handleRemoveImage = (id: string) => {
        const newImages = images.filter((item: TImageFile) => item?.id !== id);
        setImages(newImages);
    }
    const imageFile = watch("images")?.[0];
    const { image, isLoading } = useGetImage(imageFile);
    useEffect(() => {
        if (!image) return;
        if (images.length >= 3) {
            toast.error("Upload maximum 3 images");
            return;
        }
        const id = Math.random().toString(36).substring(2, 12);
        if (image) {
            setImages(prev => [...prev, { id, image }]);
        }
    }, [image])


    const onSubmit: SubmitHandler<TInputs> = (data) => {
        console.log("data", DataTransfer);
        const updatedProduct = {
            title: data.title ? data?.title : currentProduct?.title,
        }
        console.log("updated product", updatedProduct);
    }
    return (
        <ProtectedRoute>
            <NavigateButton text={"edit product"}></NavigateButton>
            <div className="flex justify-center mt-3 md:mt-4 text-title">
                <form className="space-y-3 w-full md:w-[80%] bg-normal rounded-xl md:p-5 p-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col md:flex-row md:gap-5 gap-3 items-center">
                        <div className="w-full">
                            <label className="text-sm font-medium block mb-1">Product Title</label>
                            <input type="text" defaultValue={currentProduct?.title} className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Type product title" {...register("title")} />
                        </div>
                        <div className="w-full">
                            <label className="text-sm font-medium block mb-1">Product Bid Date & Time</label>
                            <input type="date" className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Type product bid date & time" {...register("bidDate")} />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-5 gap-3 items-center">
                        <div className="w-full">
                            <label className="text-sm font-medium block mb-1">
                                Product Category
                            </label>
                            <select
                                className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3"
                                {...register("category")}
                                defaultValue={currentProduct?.category}
                            >
                                <option value="" disabled>
                                    Select product category
                                </option>
                                {
                                    categories.map(category =>
                                        <option key={category} value={category}>{category}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="text-sm font-medium block mb-1">Product Price</label>
                            <input type="number" defaultValue={currentProduct?.price} className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Type product price" {...register("price")} />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="text-sm font-medium block mb-1">Location</label>
                        <input
                            type="text"
                            defaultValue={currentProduct?.location}
                            className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3"
                            placeholder="Type product location"
                            {...register("location")}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-5 gap-3 items-center">
                        <div className="md:w-1/2 w-full">
                            <label className="text-sm font-medium block mb-1">Description</label>
                            <textarea defaultValue={currentProduct?.description} className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3 min-h-[80px]" placeholder="Type product description" {...register("description")} />
                        </div>
                        <div className="w-full md:w-1/2 border border-hard rounded-lg py-7 flex items-center justify-center gap-7">
                            {
                                isLoading ? <LoadingSpinner></LoadingSpinner> :
                                    <div className="flex items-center gap-2 text-hard">
                                        <label htmlFor="image" className="cursor-pointer ">
                                            <IoCloudUploadOutline size={30} />
                                        </label>
                                        <p >Upload a image</p>
                                    </div>
                            }
                            <input id="image" type="file" className="hidden" {...register("images")} />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <button className="bg-hard py-2 px-5 rounded-lg text-white cursor-pointer" type="submit">Upload</button>
                        <div className="flex items-center gap-3">
                            {images?.length > 0 &&
                                images?.map((item: TImageFile) => (
                                    <div key={item?.id} className="w-20 h-20 relative">
                                        <img
                                            className="rounded-md h-full w-full"
                                            src={item?.image}
                                            alt="product image"
                                        ></img>
                                        <button
                                            onClick={() => handleRemoveImage(item.id)}
                                            className="absolute top-1 right-1 rounded-full text-hard cursor-pointer hover:bg-red-500"
                                        >
                                            <CiCircleRemove size={15} />
                                        </button>
                                    </div>
                                ))}
                        </div>
                    </div>
                </form>
            </div>
        </ProtectedRoute>
    )
}

export default page;