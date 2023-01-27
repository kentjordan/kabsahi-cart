import Link from "next/link";
import React from "react";
import OpenCart from "./OpenCart";
import Favorites from "./Favorites";
import { HiMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="absolute z-10 flex h-[56px] w-full items-center justify-between  p-8 text-sm text-white md:px-8 lg:px-12">
      <h1 className="font-bold">Kabashi - Commonwealth</h1>
      <div className="hidden items-center md:flex">
        <ul className="flex text-center ">
          <li className="mx-2 cursor-pointer rounded px-2 py-1 hover:bg-dominant hover:text-white">
            <Link href="">Contact</Link>
          </li>
          <li className="mx-2 cursor-pointer rounded px-2 py-1 hover:bg-dominant hover:text-white">
            <Link href="">Location</Link>
          </li>
          <li className="mx-2 cursor-pointer rounded px-2 py-1 hover:bg-dominant hover:text-white">
            <Link href="">Open Hours</Link>
          </li>
        </ul>
        <button className=" mx-2 rounded bg-dominant px-2 py-1 text-white">
          <span className="">LOGIN</span>
        </button>
        <div className="flex items-center justify-center">
          <Favorites />
          <OpenCart />
        </div>
      </div>
      <div className="flex md:hidden">
        <OpenCart />
        <HiMenuAlt4 className=" cursor-pointer" size={24} />
      </div>
    </div>
  );
};

export default Navbar;
