"use client";
import { SubmitHandler, useForm } from "react-hook-form";

type TInputs = {
    subject: string;
    message: string;
}

const page = () => {
    const { register, handleSubmit, watch, formState: { errors }} = useForm<TInputs>()
      const onSubmit: SubmitHandler<TInputs> = (data) =>{
        console.log(data);
    }
    return (
        <div className="w-full bg-normal rounded-xl p-5">
                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full">
                        <input type="text" className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Subject" {...register("subject", {required: true})} />
                        {errors.subject && <span>Subject is required</span>}
                    </div>
                    <div>
                        <textarea className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Message" {...register("message", {required: true})} />
                        {errors.message && <span>Message is required</span>}
                    </div>
                    <div className="flex justify-center gap-5 items-center *:py-2 *:px-7 *:rounded-xl *:cursor-pointer">
                        <button className="border border-hard text-hard" type="submit">Cancel</button>
                        <button className="bg-hard text-white" type="submit">Report</button>
                    </div>
                </form>
            </div>
    );
};

export default page;