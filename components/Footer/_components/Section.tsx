import Link from "next/link";
import React from "react";

const Section = () => {
  return (
    <div className="mx-8 my-4 flex flex-col">
      <h1 className="my-4  text-center font-bold">About us</h1>
      <span className="my-1 text-sm text-stone-200">
        <Link href={""}>Lorem ipsum, dolor</Link>
      </span>
      <span className="my-1 text-sm text-stone-200">
        <Link href={""}>Lorem ipsum, dolor</Link>
      </span>
      <span className="my-1 text-sm text-stone-200">
        <Link href={""}>Lorem ipsum, dolor</Link>
      </span>
      <span className="my-1 text-sm text-stone-200">
        <Link href={""}>Lorem ipsum, dolor</Link>
      </span>
    </div>
  );
};

export default Section;
