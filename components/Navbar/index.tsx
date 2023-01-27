import Link from "next/link";
import React from "react";
import OpenCart from "./OpenCart";
import Favorites from "./Favorites";

const Navbar = () => {
  return (
    <div className="flex h-[56px] w-full items-center justify-between border-b border-stone-300 bg-white px-4 text-sm md:px-8 lg:px-12">
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
    </div>
  );
};

export default Navbar;
