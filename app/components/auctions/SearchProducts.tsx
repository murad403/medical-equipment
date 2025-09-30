"use client";
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type TInputs = {
    searchText: string;
}

const SearchProducts = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<TInputs>();
        const onSubmit: SubmitHandler<TInputs> = (data) =>{
            console.log(data);
        }
    return (
        <div>
            <form className="w-full space-y-3 space-x-5" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Search your product here..." className="appearance-none w-[70%] outline-none border border-hard bg-normal rounded-lg py-2 px-4" type="text" {...register("searchText", {required: true})} />
                {errors.searchText && <span className="text-sm text-red-500">Email is required</span>}
                <button className="rounded-lg cursor-pointer border-hard border w-[27%] text-hard py-2">Search</button>
            </form>
        </div>
    );
};

export default SearchProducts;