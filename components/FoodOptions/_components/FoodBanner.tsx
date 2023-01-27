import React, { FunctionComponent } from "react";

import Image, { StaticImageData } from "next/image";
import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { closeFoodOptions } from "@redux/slices/foods/foods";
import IStoreReducer from "@redux/IStoreReducer";

const FoodBanner = () => {
  const dispatch = useDispatch();

  const { foods, foodOptions } = useSelector(
    (state: IStoreReducer) => state._foodReducer
  );

  const foodIndex = foods.findIndex((e) => {
    return e.foodCode === foodOptions.openedFoodCode;
  });

  const { foodName, img } = foods[foodIndex];

  return (
    <div className="relative flex h-[250px]  w-full flex-col items-center justify-center overflow-hidden bg-[#AE015B] p-8 shadow  md:rounded-t-md">
      {/* Gradient Background of Food Title */}
      <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 to-black/0" />

      <IoClose
        onClick={() => {
          dispatch(closeFoodOptions(false));
        }}
        size={32}
        className="absolute right-0 top-0 m-2 cursor-pointer text-white drop-shadow"
      />
      <h1 className="absolute left-0 bottom-0 m-6 text-4xl font-bold text-white drop-shadow-lg md:text-5xl">
        {foodName}
      </h1>
      <div className="flex w-full justify-center">
        <Image src={img} height={180} width={180} alt="Biryani" />
        <Image src={img} height={180} width={180} alt="Biryani" />
        <Image src={img} height={180} width={180} alt="Biryani" />
        <Image src={img} height={180} width={180} alt="Biryani" />
      </div>
    </div>
  );
};

export default FoodBanner;
