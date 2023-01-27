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
    <div className="w-full bg-dominant px-8 py-4 text-white">
      <div className="m-4 flex h-[30%] items-center justify-between  border-b border-stone-300 px-4 py-8">
        {/* <span className="fon">Kabsahi</span> */}
        <Image src={KabsahiLogo} alt="Kabsahi Logo" width={150} />
        <div className="flex">
          <IoLogoFacebook size={24} className="mx-1 cursor-pointer " />
          <IoLogoInstagram size={24} className="mx-1 cursor-pointer " />
          <IoLogoYoutube size={24} className="mx-1 cursor-pointer " />
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
