import React from 'react';
import MinusIcon from 'assets/images/icons/minus.svg';
import PlusIcon from 'assets/images/icons/plus.svg';

const NumberInput = ({ value, onChange }) => {
  return <div className='h-8 flex flex-shrink-0 items-center bg-[#F1F1F1] shadow-button-add rounded-[10px] p-1'>
    <img
      src={MinusIcon}
      className='cursor-pointer transition hover:opacity-70'
      alt="decrease"
      onClick={() => value > 1 && onChange(value - 1)}
    />
    <p className='min-w-[30px] font-medium text-[13px] text-center mx-0.5'>{value}</p>
    <img
      src={PlusIcon}
      className='cursor-pointer transition hover:opacity-70'
      alt="increase"
      onClick={() => onChange(value + 1)}
    />
  </div>
}

export default NumberInput;