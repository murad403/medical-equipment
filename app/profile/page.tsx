"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdAddPhotoAlternate } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import toast from "react-hot-toast";
import { addUser } from "../redux/features/userSlice";
import useGetImage from "../hooks/useGetImage";
import LoadingSpinner from "../shared/LoadingSpinner";
import { useUpdateProfileMutation } from "../redux/api/api";

type TInputs = {
    name: string;
    email: string;
    image: string;
}

const page = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<TInputs>();
    const { user } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const [updateProfile] = useUpdateProfileMutation();

    const imageFile = watch("image")?.[0];
    const { image, isLoading } = useGetImage(imageFile);
    // console.log(image);

    const onSubmit: SubmitHandler<TInputs> = async (data) => {
        const profileData = {
            ...data, photo: image
        }
        try {
            const result = await updateProfile({userId: user?._id as string, payload: profileData}).unwrap();
            toast.success(result?.message);
            dispatch(addUser(result?.data));
            reset();
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message);
        }
    }
    return (
        <div>
            <form className="space-y-3 bg-normal rounded-xl md:p-5 p-3 text-title" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col md:flex-row md:gap-5 gap-3 items-center">
                    <div className="w-full">
                        <label className="text-sm font-medium block mb-1">Name</label>
                        <input type="text" className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Enter name" {...register("name")} />
                    </div>
                    <div className="w-full">
                        <label className="text-sm font-medium block mb-1">Email</label>
                        <input type="email" className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Enter email" {...register("email")} />
                    </div>
                </div>
                <div className="w-full border border-hard rounded-lg py-7 flex items-center justify-center gap-7">
                    {
                        isLoading ? <LoadingSpinner></LoadingSpinner> :
                            <div className="flex items-center gap-2">
                                <label htmlFor="image" className="cursor-pointer">
                                    <MdAddPhotoAlternate size={30} />
                                </label>
                                <p>Upload Photo</p>
                            </div>
                    }
                    <input id="image" type="file" className="hidden" {...register("image")} />
                </div>
                <div className="flex justify-center items-center mt-5">
                    <button className="bg-hard py-2 px-5 rounded-lg text-white cursor-pointer" type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};

export default page;