"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdAddPhotoAlternate } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import axios from "axios";
import toast from "react-hot-toast";
import { addUser } from "../redux/features/userSlice";
import useGetImage from "../hooks/useGetImage";

type TInputs = {
    name: string;
    email: string;
    image: string;
}

const page = () => {
    const { register, handleSubmit, watch, formState: { errors }} = useForm<TInputs>();
    const {user} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    
    const imageFile = watch("image")?.[0];
    const image = useGetImage(imageFile);
    // console.log(image);

      const onSubmit: SubmitHandler<TInputs> = (data) =>{
        const profileData = {
            ...data, photo: image
        }
        axios.post(`/api/profile/update-profile/${user?.email}`, profileData)
        .then(result =>{
            dispatch(addUser(result.data.data));
            toast.success(result?.data?.message);
        })
        .catch(error =>{
            console.log(error.response.data.message);
            toast.error(error.response.data.message);
        })
      }
    return (
        <div>
            <form className="space-y-3 bg-normal rounded-xl md:p-5 p-3 text-title" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col md:flex-row md:gap-5 gap-3 items-center">
                        <div className="w-full">
                            <label className="text-sm font-medium block mb-1">Name</label>
                            <input type="text" className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Enter name" {...register("name", {required: true})} />
                            {errors.name && <span>Name is required</span>}
                        </div>
                        <div className="w-full">
                            <label className="text-sm font-medium block mb-1">Email</label>
                            <input type="email" className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Enter email" {...register("email", {required: true})} />
                            {errors.email && <span>Email is required</span>}
                        </div>
                    </div>
                    <div className="w-full border border-hard rounded-lg py-7 flex items-center justify-center gap-7">
                        <div className="flex items-center gap-2">
                            <label htmlFor="image" className="cursor-pointer">
                                <MdAddPhotoAlternate size={30}/>
                            </label>
                            <p>Upload Photo</p>
                        </div>
                        <input id="image" type="file" className="hidden" {...register("image", {required: true})} />
                        {errors.email && <span>Email is required</span>}
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <button className="bg-hard py-2 px-5 rounded-lg text-white cursor-pointer" type="submit">Save</button>
                    </div>
                </form>
        </div>
    );
};

export default page;