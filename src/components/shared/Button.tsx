import React, { ReactNode } from "react";
import clsx from "clsx";

interface IButton {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

const Button: React.FC<IButton> = ({ className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "uppercase px-5 py-3 text-xl rounded-full tracking-wide",
        !className?.includes("text-") && "text-white",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
