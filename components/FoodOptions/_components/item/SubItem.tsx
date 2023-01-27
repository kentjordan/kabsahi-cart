import React, { FunctionComponent, useEffect, useState } from "react";
import { IoRemove, IoAdd } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import IStoreReducer from "@redux/IStoreReducer";
import { incrementQty, decrementQty } from "@redux/slices/foods/foods";

interface ISubItem {
  name?: string;
  pk?: string;
  isSelected?: boolean;
  indexes: [food: number, variation: number, item: number, itemOptions: number];
  qty: number;
}

const SubItem: FunctionComponent<ISubItem> = ({
  name,
  pk,
  isSelected,
  indexes: [food, variation, item, itemOptions],
}) => {
  const dispatch = useDispatch();

  const { cart, foods } = useSelector(
    (state: IStoreReducer) => state._foodReducer
  );

  console.log("SubItem");

  // if (foodsCart.length > 0) {
  //   const selectedItem = foodsCart.filter((e) => e.pk === pk).at(0);
  //   console.log(selectedItem);
  // }

  const indexes = {
    food,
    variation,
    item,
    itemOptions,
  };

  const selectedItem =
    foods[food].types[variation].items[item].itemOptions[itemOptions];

  return (
    <>
      <div className="my-2 flex w-full items-center justify-start">
        <div className="mx-1 flex items-center justify-center">
          <button
            className=""
            disabled={selectedItem.cartQty <= 0}
            onClick={() => {
              dispatch(decrementQty(indexes));
            }}
          >
            <IoRemove size={24} className="mx-1 cursor-pointer " />
          </button>
          <span className="w-[32px] rounded-sm border-2 border-stone-200 px-1 text-center font-bold">
            {selectedItem.cartQty}
          </span>
          <button
            className=""
            disabled={selectedItem.cartQty >= 99}
            onClick={() => dispatch(incrementQty(indexes))}
          >
            <IoAdd size={24} className="mx-1 cursor-pointer text-pink-600" />
          </button>
        </div>
        <div className="flex w-full justify-between text-sm">
          <span>{name}</span>
          <span className="mx-4 italic">P{129}</span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default SubItem;
