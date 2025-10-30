import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='flex items-center justify-center w-full min-h-screen'>
            <div className='w-[40%] bg-normal p-7 md:p-14 rounded-lg text-center'>
                <h2 className='text-red-500 text-4xl'>Payment cancel successfully!!!</h2>
                <Link href={"/"} className='text-title text-lg underline underline-offset-2'>Back to home</Link>
            </div>
        </div>
    );
};

export default page;