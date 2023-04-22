import React, { useEffect, useRef, useState } from "react";
import CaretIcon from "assets/images/icons/caret.svg";

const Collapse = ({ title, children }) => {
  const bodyRef = useRef()
  const [height, setHeight] = useState(null);
  const [isOpened, setIsOpened] = useState(true);
  const handleToggleOpen = () => setIsOpened(!isOpened);

  useEffect(() => {
    setHeight(bodyRef.current.getBoundingClientRect().height);
  }, [])

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between px-4">
        <span className="flex-shrink-0">{title}</span>
        <span className="inline-block w-full h-[1px] bg-[#4A5662] opacity-10 mx-2"></span>
        <img src={CaretIcon}
          onClick={handleToggleOpen}
          className={`${isOpened ? `rotate-180` : ``} transition cursor-pointer`}
          alt="caret icon"
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${isOpened ? `max-h-screen` : `max-h-[0px]`}`}
        ref={bodyRef}
      // style={{ height: isOpened ? `${height}px` : 0 }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
