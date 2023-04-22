import React, { useState, useEffect } from "react";
import NumberInput from "./NumberInput";
import { useDispatch, useSelector } from "react-redux";
import INR from "assets/images/icons/inr.svg";
import { updateProductCount } from "store/actions/Cart";

const Order = ({ id, count, editable = true }) => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);
  const handleChange = value => {
    dispatch(updateProductCount(id, value))
  }

  const getProductById = id => {
    return products.filter(product => product.id === id)[0];
  }

  useEffect(() => {
    setProduct(getProductById(id))
    console.log(getProductById(id))
  }, [products]);

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex items-center">
        <img src={INR} className="mr-2" alt="" />
        <div>
          <p className="text-sm leading-5 mb-1">{product?.name}</p>
          <p className="font-medium text-xs leading-4 text-[#727272]">₹{product?.price}</p>
        </div>
      </div>
      {editable
        ? <NumberInput value={count} onChange={handleChange} />
        : <div className="min-w-[90px] h-8 flex items-center justify-center rounded-[10px]">
          <span className="font-medium text-[13px]">{count}</span>
        </div>
      }
    </div>
  );
};

export default Order;
