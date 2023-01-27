import React, { FunctionComponent, ReactElement } from "react";

interface IItem {
  name?: string;
  children?: Array<ReactElement> | ReactElement;
}

const Item: FunctionComponent<IItem> = ({ name, children }) => {
  return (
    <div className="m-4 flex w-full flex-col">
      {name && (
        <span className="m-1 p-2 text-2xl">
          {name === "Chicken" ? `🐔 Chicken` : `🐄 Beef`}
        </span>
      )}
      {children}
    </div>
  );
};

export default Item;
