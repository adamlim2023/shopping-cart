import React from "react";
import IconButton from "components/Common/IconButton";
import ShoppingBagIcon from "assets/images/icons/shopping-bag.svg";
import BookOpenIcon from "assets/images/icons/book-open.svg";
import BoltBlackIcon from "assets/images/icons/bolt_black.svg";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 px-8 py-4 flex items-center justify-between bg-[#F1F1F1] rounded-t-[10px]">
      <IconButton>
        <img src={BoltBlackIcon} alt="" />
      </IconButton>
      <IconButton active>
        <img src={BookOpenIcon} alt="" />
      </IconButton>
      <IconButton>
        <img src={ShoppingBagIcon} alt="" />
      </IconButton>
    </div>
  );
};

export default Footer;
