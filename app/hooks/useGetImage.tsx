"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetImage = (imageFile: File | string | null | undefined) => {
    const [image, setImage] = useState<string>("");
    useEffect( () =>{
        if(!imageFile) return;
        if (imageFile) {
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string);
        axios.post(`https://api.cloudinary.com/v1_1/dyk7onoeo/image/upload`, formData)
            .then(result => {
                // console.log(result?.data?.url);
                setImage(result?.data?.url);
            })
            .catch(error => {
                console.log(error);
            })
    }
    }, [imageFile])
    return image;
};

export default useGetImage;