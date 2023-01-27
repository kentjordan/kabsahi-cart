import React, { FunctionComponent, ReactElement } from "react";

interface IType {
  name: string;
  children?: Array<ReactElement> | ReactElement;
}

const Type: FunctionComponent<IType> = ({ name, children }) => {
  return (
    <div className="flex h-auto w-full flex-col ">
      <div className="shadow-sm">
        <span className="m-4 inline-block text-2xl font-bold">{name}</span>
      </div>
      <div className="relative w-full ">
        <div className="flex h-auto w-full flex-wrap overflow-x-hidden ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Type;
