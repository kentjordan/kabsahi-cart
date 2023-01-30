import React from "react";
import Button from "../UI/Button";
import { IoClose, IoCartOutline } from "react-icons/io5";
import Item from "./_components/Item";
import { useSelector, useDispatch } from "react-redux";

import IStoreReducer from "@redux/IStoreReducer";
import type { IFoodItemOptions } from "@redux/slices/foods/types";
import { openCart, closeCart } from "@redux/slices/cart";
import { motion } from "framer-motion";

interface IFoodCart extends IFoodItemOptions {
  type?: string;
}

const Cart = () => {
  const dispatch = useDispatch();

  const { _cartReducer, _foodReducer } = useSelector(
    (state: IStoreReducer) => state
  );
  const foodCart: Array<IFoodCart> = _foodReducer.cart;

  let subTotal = foodCart.map((e, i) => e.price).reduce((p, c) => p + c, 0);

  return (
    <>
      {_cartReducer.isOpened && (
        <motion.div
          initial={{ x: 500 }}
          transition={{ ease: "anticipate", duration: 0.25 }}
          animate={{ x: 0 }}
          className="fixed right-0 z-50 flex h-screen min-w-[300px] flex-col justify-between overflow-hidden border-l-2 border-stone-200 bg-white shadow"
        >
          <div className="h-[56px] w-full border-b border-stone-300 p-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <IoCartOutline className="mx-2" size={40} />
                <h1 className="mx-2 text-xl font-bold">My Cart</h1>
                <span className="text-xl font-bold text-pink-700">
                  ({foodCart.length <= 0 ? "Empty" : foodCart.length})
                </span>
              </div>
              <IoClose
                className="cursor-pointer"
                size={32}
                onClick={() => {
                  dispatch(closeCart(false));
                }}
              />
            </div>
          </div>
          <div className="h-full overflow-x-hidden overflow-y-scroll px-4">
            {foodCart.length <= 0 ? (
              <>
                <div className="flex h-full w-full flex-col items-center justify-center text-center ">
                  <span className="my-1 text-2xl font-bold">
                    Cart is empty ☹️
                  </span>
                  <span className="my-1">
                    Login to view your cart and start ordering
                  </span>
                  <button className="my-4 rounded bg-dominant py-2 px-4 font-bold text-white shadow">
                    LOGIN / SIGN UP
                  </button>
                </div>
              </>
            ) : (
              foodCart.map((e, i) => (
                <Item
                  pk={e.pk}
                  type={e.type}
                  name={e.name}
                  img={e.img}
                  price={e.price}
                  quantity={e.cartQty}
                  key={i}
                />
              ))
            )}
          </div>
          {foodCart.length > 0 && (
            <div className="flex min-h-[180px] w-full flex-col justify-between border-t p-4 shadow">
              <div className="">
                <div className="flex justify-between">
                  <h1 className="font-bold">Delivery Fee</h1>
                  <h1 className="text-sm text-stone-500">
                    Calculated in checkout
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="font-bold">Subtotal</h1>
                  <h1 className="text-lg font-bold">₱{subTotal}</h1>
                </div>
              </div>

              <button
                onClick={() => {}}
                className="h-[40] w-full rounded bg-dominant p-2 font-bold text-white"
              >
                Checkout
              </button>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
};

export default Cart;
