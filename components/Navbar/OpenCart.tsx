import { IoCartOutline } from "react-icons/io5";
import { openCart } from "@redux/slices/cart";
import { useDispatch, useSelector } from "react-redux";
import IStoreReducer from "@redux/IStoreReducer";

const OpenCart = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state: IStoreReducer) => state._foodReducer);
  return (
    <div className="mx-2 flex items-center justify-center">
      <div
        onClick={() => dispatch(openCart(true))}
        className="flex items-center justify-center"
      >
        <IoCartOutline size={24} />
      </div>
      <span>{cart.length}</span>
    </div>
  );
};

export const FloatingOpenCart = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state: IStoreReducer) => state._foodReducer);
  return (
    <div
      onClick={() => dispatch(openCart(true))}
      className="fixed bottom-0 right-0 z-[50] m-4 flex h-[50px] w-[50px] cursor-pointer flex-col items-center justify-center rounded-full bg-dominant text-white shadow md:hidden"
    >
      <span className="absolute top-[-12px] left-[-12px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-yellow-400 p-2 text-center shadow">
        {cart.length}
      </span>
      <div className="flex items-center justify-center">
        <IoCartOutline size={24} />
      </div>
    </div>
  );
};
export default OpenCart;
