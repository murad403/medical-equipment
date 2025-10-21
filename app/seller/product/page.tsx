"use client";
import NavigateButton from "@/app/shared/NavigateButton";
import { CiCircleRemove } from "react-icons/ci";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoCloudUploadOutline } from "react-icons/io5";
import { categories } from "@/app/components/auctions/CollectibleProducts";

type TInputs = {
  title: string;
  bidDateTime: string;
  category: number;
  price: number;
  images: TImageFile[];
  description: string;
  location: string;
};
type TImageFile = {
  id: string;
  image: any;
};

const page = () => {
  const [imageFile, setImageFile] = useState<TImageFile[]>([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TInputs>();

  const imageList = watch("images");
  const id = Math.random().toString(36).substring(2, 12);
  useEffect(() => {
    if (imageList && imageList.length > 0) {
      if (imageFile.length >= 3) return;
      const file = imageList[0] as unknown as File;
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setImageFile((prev: TImageFile[]): TImageFile[] => {
            if (imageFile.length >= 3) return prev;
            const image = reader.result;
            return [...prev, { id, image }];
          });
        }
      };
      reader.readAsDataURL(file);
    }
  }, [imageList]);
  const handleRemoveImage = (id: string) => {
    const newImageFile = imageFile.filter((item) => item?.id !== id);
    setImageFile(newImageFile);
  };

  // console.log(imageFile);

  const onSubmit: SubmitHandler<TInputs> = (data) => {
    const product = {
      ...data,
      images: imageFile,
    };
    console.log(product);
  };
  return (
    <div>
      <NavigateButton text={"Upload product"}></NavigateButton>
      <div className="flex justify-center mt-3 md:mt-4 text-title">
        <form
          className="space-y-3 w-full md:w-[80%] bg-normal rounded-xl md:p-5 p-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col md:flex-row md:gap-5 gap-3 items-center">
            <div className="w-full">
              <label className="text-sm font-medium block mb-1">
                Product Title
              </label>
              <input
                type="text"
                className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3"
                placeholder="Type product title"
                {...register("title", { required: true })}
              />
              {errors.title && <span>Product title is required</span>}
            </div>
            <div className="w-full">
              <label className="text-sm font-medium block mb-1">
                Product Bid Date & Time
              </label>
              <input
                type="date"
                className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3"
                placeholder="Type product bid date & time"
                {...register("bidDateTime", { required: true })}
              />
              {errors.bidDateTime && (
                <span>Product bid date & time is required</span>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-5 gap-3 items-center">
            <div className="w-full">
              <label className="text-sm font-medium block mb-1">
                Product Category
              </label>
              <select
                className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3"
                {...register("category", { required: true })}
                defaultValue=""
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
              {errors.category && (
                <span className="text-red-500 text-sm">
                  Product category is required
                </span>
              )}
            </div>
            <div className="w-full">
              <label className="text-sm font-medium block mb-1">
                Product Price
              </label>
              <input
                type="number"
                className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3"
                placeholder="Type product price"
                {...register("price", { required: true })}
              />
              {errors.price && <span>Product price is required</span>}
            </div>
          </div>
          <div className="w-full">
              <label className="text-sm font-medium block mb-1">Location</label>
              <input
                type="text"
                className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3"
                placeholder="Type product location"
                {...register("location", { required: true })}
              />
              {errors.location && (
                <span>location is required</span>
              )}
            </div>
          <div className="flex flex-col md:flex-row md:gap-5 gap-3 items-center">
            <div className="md:w-1/2 w-full">
              <label className="text-sm font-medium block mb-1">Description</label>
              <textarea
                className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3"
                placeholder="Type product description"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <span>Product description is required</span>
              )}
            </div>
            <div className="w-full md:w-1/2 border border-hard rounded-lg py-7 flex items-center justify-center gap-7">
              <div className="flex items-center gap-2 text-hard">
                <label htmlFor="image" className="cursor-pointer ">
                  <IoCloudUploadOutline size={30} />
                </label>
                <p>Upload a image</p>
              </div>
              <input
                id="image"
                type="file"
                className="hidden"
                {...register("images", { required: true })}
              />
              {errors.images && <span>Image is required</span>}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              className="bg-hard py-2 px-5 rounded-lg text-white cursor-pointer"
              type="submit"
            >
              Upload
            </button>
            <div className="flex items-center gap-3">
              {imageFile.length > 0 &&
                imageFile.map((item) => (
                  <div key={item?.id} className="w-20 h-20 relative">
                    <img
                      className="rounded-md h-full w-full"
                      src={item?.image}
                      alt="product image"
                    ></img>
                    <button
                      onClick={() => handleRemoveImage(item.id)}
                      className="absolute top-1 right-1 rounded-full text-white cursor-pointer hover:bg-red-500"
                    >
                      <CiCircleRemove size={15} />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
