import React, { FunctionComponent } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import Image, { StaticImageData } from "next/image";
import KabsahiLogo from "@assets/logo/logo-official.png";
import { BiTrashAlt } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";

import IStoreReducer from "@redux/IStoreReducer";
import { IFoodItemOptions } from "@redux/slices/foods/types";
import { removeFromCart } from "@redux/slices/foods/foods";
import { motion } from "framer-motion";

interface ICartItem {
  name?: string;
  img?: StaticImageData;
  price?: number;
  quantity?: number;
  pk: string;
  type: string | undefined;
}

const Item: FunctionComponent<ICartItem> = ({
  name = "Food Item",
  type = "",
  img = KabsahiLogo,
  price = 0,
  quantity = 0,
  pk,
}) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ x: 500 }}
      transition={{ ease: "anticipate", duration: 0.25 }}
      animate={{ x: 0 }}
      className="my-4 flex h-[108px] w-full items-center justify-center rounded border border-stone-200 shadow"
    >
      <div className="m-2 flex w-full items-center justify-between">
        <div className="flex items-center justify-center ">
          {/* <MdEdit className="mx-2 cursor-pointer text-stone-700" /> */}

          <div className="mx-1 flex items-center justify-center">
            <IoRemove size={24} className="m-1 cursor-pointer " />
            <span className="rounded-sm border-2 border-stone-200 px-1">
              {quantity}
            </span>
            <IoAdd size={24} className="m-1 cursor-pointer text-pink-600" />
          </div>

          <div className="mx-1 flex items-center">
            <Image src={img} height={80} width={80} alt={`Image`} />
            <div className="mx-2 flex">
              <span className="text-sm">
                {/* <span className="text-sm font-bold">
                  {type ? type : ""}:&nbsp;
                </span> */}
                {name}
              </span>
            </div>
          </div>
        </div>

        <div className="mx-2 flex items-center">
          <span className="mx-1 font-bold text-pink-600">₱{price}</span>
        </div>
      </div>

      <div
        onClick={() => {
          dispatch(removeFromCart(pk));
        }}
        className="flex h-full cursor-pointer items-center rounded-r bg-red-600 p-2"
      >
        <BiTrashAlt size={20} className="text-white" />
      </div>
    </motion.div>
  );
};

export default Item;
