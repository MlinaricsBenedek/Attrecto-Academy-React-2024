import classNames from "classnames";
import React from "react";
import { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes {
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
