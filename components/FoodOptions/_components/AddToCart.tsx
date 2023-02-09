import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart as addToCartAction } from "@redux/slices/foods/foods";
import IStoreReducer from "@redux/IStoreReducer";
import addToCart from "../utils/addToCart";

const AddToCart = () => {
  const dispatch = useDispatch();

  const { foods, foodOptions } = useSelector(
    (state: IStoreReducer) => state._foodReducer
  );

  const foodIndex = foods.findIndex((e) => {
    return e.foodCode === foodOptions.openedFoodCode;
  });

  return (
    <div className="absolute bottom-0 w-full bg-white p-4 shadow md:rounded-b-md">
      <button
        onClick={() => dispatch(addToCartAction(addToCart(foods, foodIndex)))}
        className="flex h-[40px] w-full items-center justify-center rounded-md bg-dominant font-bold text-white shadow-md"
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
