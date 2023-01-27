import { IoHeartOutline } from "react-icons/io5";

const Favorites = () => {
  return (
    <div className="mx-2 flex items-center justify-center">
      <button className="flex items-center justify-center">
        <IoHeartOutline size={24} />
      </button>
      <span>0</span>
    </div>
  );
};

export default Favorites;
