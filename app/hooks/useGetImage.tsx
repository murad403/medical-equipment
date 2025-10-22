"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetImage = (imageFile: File | string | null | undefined) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [image, setImage] = useState<string>("");
    useEffect( () =>{
        if(!imageFile) return;
        if (imageFile) {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string);
        axios.post(`https://api.cloudinary.com/v1_1/dyk7onoeo/image/upload`, formData)
            .then(result => {
                setImage(result?.data?.url);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
    }
    }, [imageFile])
    return {image, isLoading};
};

export default useGetImage;