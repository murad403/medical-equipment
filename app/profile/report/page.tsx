"use client";
import { useAddReportMutation } from "@/app/redux/api/api";
import { useAppSelector } from "@/app/redux/hook";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type TInputs = {
    subject: string;
    message: string;
}

const page = () => {
    const { user } = useAppSelector((state) => state?.user);
    const [addReport] = useAddReportMutation();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<TInputs>();

    const onSubmit: SubmitHandler<TInputs> = async(data) => {
        const report = {
            ...data, reportId: user?._id
        }
        try {
            const result = await addReport(report).unwrap();
            toast.success(result?.message);
            reset();
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message);
        }
    }
    const handleCancelReport = () =>{
        reset();
    }
    return (
        <div className="w-full bg-normal rounded-xl p-5 text-title">
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full">
                    <input type="text" className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Subject" {...register("subject", { required: true })} />
                    {errors.subject && <span>Subject is required</span>}
                </div>
                <div>
                    <textarea className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Message" {...register("message", { required: true })} />
                    {errors.message && <span>Message is required</span>}
                </div>
                <div className="flex justify-center gap-5 items-center *:py-2 *:px-7 *:rounded-xl *:cursor-pointer">
                    <button className="border border-hard text-hard" onClick={handleCancelReport}>Cancel</button>
                    <button className="bg-hard text-white" type="submit">Report</button>
                </div>
            </form>
        </div>
    );
};

export default page;