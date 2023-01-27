import React, { ButtonHTMLAttributes, FunctionComponent } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  extendClass?: string;
}

const Button: FunctionComponent<IButton> = ({ extendClass, ...props }) => {
  return (
    <button
      className={`rounded bg-[#B51367] font-bold text-white shadow-md ${extendClass}`}
      {...props}
    />
  );
};

export default Button;
