"use client";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";
import toast from "react-hot-toast";

const SecureUserRoute = ({children}: {children: React.ReactNode}) => {
    const router = useRouter();
    useEffect( () =>{
        const token = Cookies.get("accessToken");
        if(!token){
            router.push('/auth/sign-in');
            toast.error("Please sing in!!!");
            return;
        }
        const decoded: any = jwt.decode(token);
        const currentRole = decoded?.payload?.role;
        if(currentRole !== "user" && currentRole !== "seller"){
            router.push("/");
            toast.error("Please sing in!!!");
            return;
        }
    }, [])
    return <>{children}</>
};

export default SecureUserRoute;