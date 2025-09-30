"use client";
import { usePathname } from 'next/navigation';
import React from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

const ClientWrapper = ({children}: {children: React.ReactNode}) => {
    const pathName = usePathname();
    const hideLayout = pathName.startsWith("/auth");
    return (
        <div>
            {
                !hideLayout && <Navbar></Navbar>
            }
            {
                children
            }
            {
                !hideLayout && <Footer></Footer>
            }
        </div>
    );
};

export default ClientWrapper;