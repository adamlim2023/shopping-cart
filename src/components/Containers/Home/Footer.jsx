import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconButton from "components/Common/IconButton";
import ShoppingBagIcon from "assets/images/icons/shopping-bag.svg";
import BookOpenIcon from "assets/images/icons/book-open.svg";
import BoltBlackIcon from "assets/images/icons/bolt_black.svg";

const Footer = () => {
  const navigate = useNavigate();
  const { order } = useSelector(state => state.cart);

  return (
    <div className="fixed bottom-0 left-0 right-0 px-8 py-4 flex items-center justify-between bg-[#F1F1F1] rounded-t-[10px]">
      <IconButton>
        <img src={BoltBlackIcon} alt="" />
      </IconButton>
      <IconButton active>
        <img src={BookOpenIcon} alt="" />
      </IconButton>
      <div className="relative">
        <span className="w-4 h-4 inline-flex items-center justify-center bg-[#EF4B4B] text-white text-xs font-medium rounded-full absolute 
        -top-1.5 -right-1.5">
          {order.map(item => item.count).reduce((a, b) => a + b, 0)}
        </span>
        <IconButton onClick={() => navigate('/cart')}>
          <img src={ShoppingBagIcon} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
