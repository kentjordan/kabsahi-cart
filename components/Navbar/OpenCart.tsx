import { IoCartOutline } from "react-icons/io5";
import { openCart } from "@redux/slices/cart";
import { useDispatch, useSelector } from "react-redux";
import IStoreReducer from "@redux/IStoreReducer";

const OpenCart = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state: IStoreReducer) => state._foodReducer);
  return (
    <div className="mx-2 flex items-center justify-center">
      <button
        onClick={() => dispatch(openCart(true))}
        className="flex items-center justify-center"
      >
        <IoCartOutline size={24} />
      </button>
      <span>{cart.length}</span>
    </div>
  );
};

export default OpenCart;
