"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
interface AccordianProps {
  children: React.ReactNode;
}

const Accordian: React.FC<AccordianProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div className="w-full">
      <div>
        <button
          className="w-full h-10 bg-gradient-to-r from-purple-500 via-orange-600 to-purple-500 flex justify-center items-center space-x-2 rounded-tl-sm rounded-tr-sm"
          onClick={() => {
            handleClick();
          }}
        >
          <p>More Categories</p>
          <span>
            <IoIosArrowDown />
          </span>
        </button>
      </div>
      {isOpen && (
        <div className="w-full bg-gradient-to-r from-purple-500 via-orange-600 to-purple-500 p-2 pt-0">
          <div className="w-full flex justify-cente bg-slate-100 rounded-sm">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordian;
