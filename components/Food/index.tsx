import React, { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";
import { useDispatch } from "react-redux";
import { openFoodOptions } from "@redux/slices/foods/foods";

const Food: FunctionComponent<{
  name?: string;
  img?: StaticImageData;
  code?: string;
}> = ({ name, img, code }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() =>
        dispatch(
          openFoodOptions({
            isOpened: true,
            openedFoodCode: code,
          })
        )
      }
      className="relative mx-2 my-6 flex h-[120px] w-[120px] cursor-pointer flex-col items-center justify-end rounded-lg border-2 border-stone-300 bg-white p-3 shadow"
    >
      {name && img ? (
        <>
          <Image
            className="absolute top-[-40px]"
            src={img}
            alt={`Food Image of ${name}`}
          />
          <span className="text-center text-xs font-semibold">{name}</span>
        </>
      ) : (
        <div>
          <span className="text-center text-sm font-semibold">
            Add-ons & Extra
          </span>
        </div>
      )}
    </button>
  );
};

export default Food;
