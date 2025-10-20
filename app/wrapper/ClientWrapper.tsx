"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "../redux/store";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const hideLayout =
    pathName.startsWith("/auth") || pathName.startsWith("/seller");
  return (
    <div>
      <Provider store={store}>
        {!hideLayout && <Navbar></Navbar>}
      {children}
      {!hideLayout && <Footer></Footer>}
      <Toaster position="top-right" reverseOrder={false} />
      </Provider>
    </div>
  );
};

export default ClientWrapper;
