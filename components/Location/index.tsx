import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const Location = () => {
  return (
    <div className="  z-10 flex w-full min-w-[200px] max-w-[500px] flex-col items-center justify-center rounded border border-stone-300/30 bg-white p-8 shadow-md ">
      <span className="text-center text-xl font-bold text-dominant sm:text-2xl">
        Good day! Help us to find you. 😊
      </span>

      <div className="my-8 flex w-full items-center rounded border border-stone-300 ">
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Enter your location"
          className="w-full border-none p-2 outline-none focus:border-dominant"
        />
        <IoLocationOutline
          size={24}
          className="mx-4 cursor-pointer text-dominant"
        />
      </div>

      <div className="flex w-full flex-wrap">
        <button className="m-1 w-32 flex-grow rounded  bg-dominant px-4 py-2 font-bold text-white shadow">
          Delivery
        </button>
        <button className="m-1 w-32 flex-grow rounded bg-white px-4 py-2 text-dominant shadow">
          Pickup
        </button>
      </div>
    </div>
  );
};

export default Location;
