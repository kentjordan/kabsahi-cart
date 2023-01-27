import IStoreReducer from "@redux/IStoreReducer";
import React from "react";
import { useSelector } from "react-redux";
import Food from ".";

const BestSellers = () => {
  const { foods } = useSelector((state: IStoreReducer) => state._foodReducer);
  return (
    <div className="flex flex-col justify-center">
      <h1 className="mx-4 my-8 text-center text-xl font-bold">
        Our Best Sellers 🤤
      </h1>
      <div className="flex max-w-[700px] flex-wrap items-center justify-center">
        {foods.map((e, i) => {
          return (
            <Food key={i} name={e.foodName} code={e.foodCode} img={e.img} />
          );
        })}
      </div>
    </div>
  );
};

export default BestSellers;
