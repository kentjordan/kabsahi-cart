import React, { FunctionComponent } from "react";
import Type from "./item/Type";
import Item from "@components/FoodOptions/_components/item/Item";
import SubItem from "@components/FoodOptions/_components/item/SubItem";
import { IFood } from "@redux/slices/foods/types";
import { useSelector } from "react-redux";
import IStoreReducer from "@redux/IStoreReducer";

const Options = () => {
  const { foods, foodOptions } = useSelector(
    (state: IStoreReducer) => state._foodReducer
  );

  const foodIndex = foods.findIndex((e) => {
    return e.foodCode === foodOptions.openedFoodCode;
  });

  const food = foods[foodIndex];

  return (
    <div className="mb-20 flex h-screen w-full flex-wrap content-start overflow-y-scroll p-4 ">
      {food.types?.map((variation, variationIndex) => (
        <Type key={variationIndex} name={variation.name}>
          {variation.items.map((item, itemIndex) => (
            <Item key={itemIndex} name={item.name}>
              {item.itemOptions.map((itemOptions, itemOptionsIndex) => {
                return (
                  <SubItem
                    indexes={[
                      foodIndex,
                      variationIndex,
                      itemIndex,
                      itemOptionsIndex,
                    ]}
                    key={itemOptionsIndex}
                    name={itemOptions.name}
                    pk={itemOptions.pk}
                    qty={itemOptions.cartQty}
                  />
                );
              })}
            </Item>
          ))}
        </Type>
      ))}
    </div>
  );
};

export default Options;
