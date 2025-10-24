"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import toast from "react-hot-toast";

type TProtectedRouteProps = {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: TProtectedRouteProps) => {
    const router = useRouter();
    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) {
            router.push("/sign-in");
            return;
        }
        const decoded: any = jwt.decode(token!);
        const currentRole = decoded?.payload?.role;
        if(currentRole !== "seller"){
            router.push("/");
            toast.error("Sign up with seller first!!!");
            return;
        }
    }, [])
    return <>{children}</>
};

export default ProtectedRoute;