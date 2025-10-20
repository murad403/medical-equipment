"use client";
import React, { useEffect, useState } from 'react';

const ClientOnlyWrapper = ({children} : {children: React.ReactNode}) => {
    const [hashMounted, setHashMounted] = useState(false);
    useEffect( () =>{
        setHashMounted(true);
    }, [])
    if(!hashMounted) return null;
    return <>{children}</>
};

export default ClientOnlyWrapper;