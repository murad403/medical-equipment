"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import navbarLinks from "../data/navbar";
import { CiShoppingCart, CiMenuFries } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathName = usePathname();
//   console.log(pathName);
//   console.log(openMenu);
  return (
    <div className="px-4 md:px-14 lg:px-16 flex justify-between items-center py-3 relative">
      {/* log */}
      <Link href={"/"}>
        <Image className="w-13" alt="Logo" src={Logo}></Image>
      </Link>
      {/* menu */}
      <div className="hidden md:block">
        <ul className="flex items-center md:gap-5 lg:gap-7">
          {navbarLinks.map((link) => (
            <li
              className={`text-lg hover:border-b-2 border-primary ${pathName === link?.route ? "text-primary" : "text-gray-700"}`}
              key={link?.id}
            >
              <Link href={link?.route}>{link?.path}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* authentication */}
      <div className="hidden md:block">
        <div className="flex items-center gap-4">
          <Link
            className="bg-normal p-2 rounded-full text-primary"
            href={"/cart"}
          >
            <CiShoppingCart size={20} />
          </Link>
          <button className="bg-normal p-2 rounded-full text-primary cursor-pointer">
            <IoIosNotificationsOutline size={20} />
          </button>
          <Link
            className="px-8 py-2 text-lg rounded-lg bg-primary text-white"
            href={"/auth/sign-in"}
          >
            Login
          </Link>
        </div>
      </div>

      {/* responsive */}
      <div className="md:hidden block">
        <button
          onClick={() => setOpenMenu(true)}
          className="cursor-pointer p-2 text-primary font-bold bg-normal rounded-md"
        >
          <CiMenuFries className="font-bold" size={24} />
        </button>
      </div>

      <div
        className={`absolute top-0 z-10 right-0 bg-primary w-[200px] h-screen ${
          openMenu ? "block" : "hidden"
        } md:hidden`}
      >
        {openMenu && (
          <div>
            <div className="mt-1 m-1">
              <button
                onClick={() => setOpenMenu(false)}
                className="text-primary bg-normal rounded-full p-1 cursor-pointer"
              >
                <RxCross2 size={24} />
              </button>
            </div>
            <div className="mt-10">
              <ul className="flex flex-col gap-4 ml-3">
                {navbarLinks.map((link) => (
                  <li
                    className={`text-lg hover:border-b-2 border-normal ${pathName === link?.route ? "text-white" : "text-gray-900"}`}
                    key={link?.id}
                  >
                    <Link href={link?.route}>{link?.path}</Link>
                  </li>
                ))}
                <Link
            className="px-2 py-1 text-[17px] mr-3 flex justify-center rounded-lg bg-normal text-black"
            href={"/login"}
          >
            Login
          </Link>
          <div className="flex justify-center items-center gap-2">
            <Link
            className="bg-normal p-2 rounded-full text-primary"
            href={"/cart"}
          >
            <CiShoppingCart size={20} />
          </Link>
          <button className="bg-normal p-2 rounded-full text-primary cursor-pointer">
            <IoIosNotificationsOutline size={20} />
          </button>
          </div>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
