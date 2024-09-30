import classNames from "classnames";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  color?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  className?: string;
}
//A button osztály túltötése
export const Button = ({
  color,
  children,
  className,
  onClick,
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
      onClick={onClick}
    >
      {children}
    </button>
  );
<<<<<<< Updated upstream
};

=======
};
>>>>>>> Stashed changes
