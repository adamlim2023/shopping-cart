import React from "react";
import PlusIcon from "assets/images/icons/plus.svg";

const AddButton = ({ onClick }) => {
  return (
    <button
      className="h-8 pl-1 pr-2 flex items-center shadow-button-add rounded-[10px] bg-[#F0F0F3] transition hover:opacity-70"
      onClick={onClick}
    >
      <img src={PlusIcon} className="mr-2" alt="add item" />
      <span className="font-medium text-[13px] leading-[22px]">ADD</span>
    </button>
  );
};

export default AddButton;
