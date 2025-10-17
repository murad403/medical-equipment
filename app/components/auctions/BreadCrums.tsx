"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BreadCrums = () => {
  const path = usePathname();
  // console.log(path);
  let pathNameArray = path.split("/");
    pathNameArray.shift();
  if(pathNameArray.length > 2){
    pathNameArray.pop();
  }
//   console.log(pathNameArray);
  return (
    <div>
      <div className="breadcrumbs text-sm text-title">
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          {pathNameArray.map((pathName, index) => (
            <li key={index}>
              <Link href={`/${pathName}`}>{pathName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BreadCrums;
