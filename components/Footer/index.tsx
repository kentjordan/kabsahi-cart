import React from "react";
import KabsahiLogo from "@assets/kabsahi-logo.png";
import Image from "next/image";
import Section from "./_components/Section";

import {
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoInstagram,
} from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full bg-dominant py-4 text-white">
      <div className="m-4 flex h-[30%] flex-wrap  items-center justify-center border-b border-stone-300 px-4 py-8 md:justify-between">
        {/* <span className="fon">Kabsahi</span> */}
        <Image
          src={KabsahiLogo}
          className="mx-8 mt-[-8px]"
          alt="Kabsahi Logo"
          width={150}
        />
        <div className="my-8 flex">
          <IoLogoFacebook size={24} className="mx-2 cursor-pointer " />
          <IoLogoInstagram size={24} className="mx-2 cursor-pointer " />
          <IoLogoYoutube size={24} className="mx-2 cursor-pointer " />
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-center py-4">
        <Section />
        <Section />
        <Section />
        <Section />
      </div>
      <div className="my-12 flex h-[100px] w-full items-end justify-center font-bold">
        Copyright 2023. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
