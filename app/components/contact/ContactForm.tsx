"use client";
import { SubmitHandler, useForm } from "react-hook-form";

type TInputs = {
    name: string;
    email: string;
    phone: number;
    message: string;
}

const ContactForm = () => {
    const { register, handleSubmit, watch, formState: { errors }} = useForm<TInputs>()
  const onSubmit: SubmitHandler<TInputs> = (data) =>{
    console.log(data);
  }
    return (
        <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-10 text-title">
            <div className="w-full flex flex-col md:flex-row lg:flex-col gap-3 *:w-full lg:w-[25%] *:h-[130px] *:py-5">
                <div className="bg-normal flex flex-col justify-between rounded-xl text-center">
                    <h3 className="text-2xl font-semibold">Office Address</h3>
                    <p className="text-sm">Mst & Associate <br /> [Your Full Address Here] <br /> (City, State, Zip Code)</p>
                </div>
                <div className="bg-normal flex flex-col justify-between rounded-xl text-center">
                    <h3 className="text-2xl font-semibold">Phone</h3>
                    <p className="text-sm">+088392830</p>
                </div>
                <div className="bg-normal flex flex-col justify-between rounded-xl text-center">
                    <h3 className="text-2xl font-semibold">Email</h3>
                    <p className="text-sm">info@mstassociate.com <br /> support@mstassociate.com</p>
                </div>
            </div>
            <div className="w-full lg:w-[75%] bg-normal rounded-xl md:p-5 p-2">
                <h3 className="text-2xl font-semibold text-center mb-4">Send Us a Message</h3>
                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
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
                    <div>
                        <label className="text-sm font-medium block mb-1">Phone</label>
                        <input type="number" className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Enter phone" {...register("phone", {required: true})} />
                        {errors.phone && <span>Phone is required</span>}
                    </div>
                    <div>
                        <label className="text-sm font-medium block mb-1">Message</label>
                        <textarea className="w-full appearance-none outline-none border border-hard rounded-lg py-2 px-3" placeholder="Message" {...register("message", {required: true})} />
                        {errors.message && <span>Message is required</span>}
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <button className="bg-hard py-2 w-1/2 rounded-lg text-white" type="submit">Submit Us</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;