"use client";
import { SubmitHandler, useForm } from 'react-hook-form';

type TInputs = {
    searchText: string;
}

const SearchProducts = ({setSearch}: {setSearch: any}) => {
    const { register, handleSubmit, reset } = useForm<TInputs>();
    const onSubmit: SubmitHandler<TInputs> = (data) => {
        setSearch(data?.searchText);
        reset();
    }
    return (
        <div>
            <form className="w-full space-y-3 space-x-5" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Search your product here..." className="appearance-none md:w-[70%] w-full outline-none border border-hard bg-normal rounded-lg py-2 px-4 text-title" type="text" {...register("searchText", { required: true })} />
                <button className="rounded-lg cursor-pointer border-hard border md:w-[27%] w-full text-hard py-2">Search</button>
            </form>
        </div>
    );
};

export default SearchProducts;