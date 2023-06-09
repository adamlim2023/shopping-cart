import React from "react";
import { useDispatch } from "react-redux";
import AddButton from "./AddButton";
import INR from "assets/images/icons/inr.svg";
import { increaseProduct } from "store/actions/Cart";

const Product = (props) => {
  const { id, name, price, avatar } = props;
  const dispatch = useDispatch();
  const handleBuy = () => {
    dispatch(increaseProduct(id));
  }

  return (
    <div className="flex shadow-product bg-[#F6F6F6] p-2 rounded-[10px]">
      <img
        className="flex-shrink-0 w-[72px] min-h-[72px] object-cover rounded-[10px]"
        src={avatar}
        alt={name}
      />
      <div className="w-full ml-4 flex flex-col justify-between">
        <p className="font-medium text-base leading-5 mb-4">{name}</p>
        <div className="flex items-center justify-between">
          <p className="flex items-center">
            <img src={INR} className="mr-2" alt="" />
            <span className="font-medium text-sm leading-4">₹{price}</span>
          </p>
          <AddButton onClick={handleBuy} />
        </div>
      </div>
    </div>
  );
};

export default Product;
