import React from "react";
import CaretIcon from "assets/images/icons/caret.svg";

const Collapse = ({ title, children }) => {
  return (
    <div>
      <div className="flex items-center justify-between px-4">
        <span className="flex-shrink-0">{title}</span>
        <span className="inline-block w-full h-[1px] bg-[#4A5662] opacity-10 mx-2"></span>
        <img src={CaretIcon} className="cursor-pointer" alt="caret icon" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Collapse;
