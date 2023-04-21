import React from "react";

const IconButton = ({
  onClick,
  size = "lg",
  active = false,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center bg-[#F1F1F1] rounded-[10px] ${
        size === `sm`
          ? `w-[30px] h-[30px] shadow-button-sm`
          : `w-8 h-8 ${active ? `shadow-button-inset` : `shadow-button-lg`}`
      } ${className} transition hover:opacity-70`}
    >
      {children}
    </button>
  );
};

export default IconButton;
