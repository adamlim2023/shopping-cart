import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "components/Common/IconButton";
import Collapse from "components/Common/Collapse";
import Order from "components/Common/Order";
import Transition from "components/Common/Transition";

import { placeOrder } from 'store/actions/Cart';

import ArrowLeftIcon from 'assets/images/icons/arrow-left.svg';
import ArrowRightIcon from 'assets/images/icons/arrow-right.svg';
import FeedbackIcon from 'assets/images/icons/feedback.svg';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currOrders, prevOrders } = useSelector(state => state.cart);

  const handlePlaceOrder = () => {
    dispatch(placeOrder());
    navigate('/');
  };

  return <Transition>
    <div className="flex items-center justify-between bg-[#F1F1F1] px-4 pt-8 pb-6 rounded-b-[10px] shadow-header">
      <div className="flex items-center">
        <IconButton onClick={() => navigate('/')}>
          <img src={ArrowLeftIcon} alt="back" />
        </IconButton>
        <span className="font-medium text-xl text-[#4A5662] ml-4 leading-6">
          Place Order
        </span>
      </div>
      <IconButton>
        <img src={FeedbackIcon} alt="feedback" />
      </IconButton>
    </div>
    <div className="py-6">
      <Collapse title="Current order">
        {
          currOrders.length > 0 && <div className="mx-2 mt-4">
            <div className="shadow-order py-4 rounded-[10px]">
              {
                currOrders.map(order => <div key={order.id} className="mb-6">
                  <Order {...order} />
                </div>)
              }
              <span className="px-2 font-medium text-xs text-[#76DFE6] underline">
                Add cooking instruction
              </span>
            </div>
          </div>
        }
      </Collapse>
      <Collapse title="Previous orders">
        {
          prevOrders.length > 0 && <div className="mx-2 mt-4">
            <div className="shadow-order py-4 rounded-[10px]">
              {
                prevOrders.map(order => <div key={order.id} className="mb-6">
                  <Order {...order} editable={false} />
                </div>)
              }
              <span className="px-2 font-medium text-xs text-[#76DFE6] underline">
                Add cooking instruction
              </span>
            </div>
          </div>
        }
      </Collapse>
    </div>
    <div className="fixed left-0 right-0 bottom-0">
      <div className="max-w-lg mx-auto px-2 pb-4">
        <div
          className="h-11 flex items-center justify-between rounded-[10px] bg-gradient-to-b from-[#459EAF] to-[#007991]  text-white shadow-button-order pl-4 pr-2 cursor-pointer"
          onClick={handlePlaceOrder}
        >
          <span className="font-medium text-xs leading-4">4 items</span>
          <div className="flex items-center">
            <span className="font-semibold text-[13px] mr-2">PLACE ORDER</span>
            <img src={ArrowRightIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  </Transition>;
};

export default Cart;
