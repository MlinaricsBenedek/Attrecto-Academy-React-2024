import classNames from "classnames";
import React from "react";
import { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes {
=======
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
>>>>>>> 7f769e92e6f75f59c66cc5c98bd9a854ecb27a54
  color?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  className?: string;
}

export const Button = ({
  color,
  children,
  className,
  
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        "btn",
        {
          "btn-primary": color === "primary",
          "btn-secondary": color === "secondary",
          "btn-danger": color === "danger",
        },
        className
      )}
      
    >
      {children}
    </button>
  );
};
