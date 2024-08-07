import React, { useState } from "react";
import { navlinks } from "../constant";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative w-full bg-bluish z-[998]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <h1 className="text-2xl text-dark font-bold">
          Greece_<span className="text-skyBlue">Cat</span>
        </h1>
        <ul className="hidden md:flex items-center justify-center gap-20">
          {navlinks.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className="text-xl tracking-wider text-dark">
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <button className="text-white text-xl font-semibold tracking-wider bg-skyBlue rounded-full py-3 px-12 whitespace-nowrap border-[2px]  duration-300 transition-all hover:-translate-y-5">
          Buy Now
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden relative z-[99]"
        >
          <HiMenuAlt3 size={30} className="text-skyBlue" />
        </button>
      </nav>

      {isOpen && (
        <nav className="md:hidden max-w-7xl mx-auto  px-4 py-5 fixed top-0 bg-dark z-[999] w-full duration-500 transition-all  h-full flex flex-col items-center gap-5">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-2xl text-white font-bold">
              Greece_<span className="text-skyBlue">Cat</span>
            </h1>

            <button
              className="relative z-[99]"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={30} className="text-skyBlue" />
            </button>
          </div>

          <ul className="flex flex-col items-center justify-center gap-20 mt-20">
            {navlinks.map((item, index) => {
              return (
                <li key={index} onClick={() => setIsOpen(false)}>
                  <a
                    href={item.url}
                    className="text-2xl tracking-wider text-gray-400"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <button className=" text-white text-lg font-semibold border border-white rounded-full py-3 px-12 mt-12  duration-300 transition-all hover:scale-[1.1]">
            Buy Now
          </button>
        </nav>
      )}
    </header>
  );
};

export default header;
