import React from "react";
import { RxCopy } from "react-icons/rx";
import { TbCopy } from "react-icons/tb";
import { tokenomics } from "../constant";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative w-full">
      <div className="max-w-7xl mx-auto px-5">
        <div className="w-full flex items-center justify-between">
          <h1 className="title text-7xl text-dark font-bold">
            TOKENOMICS <span className="text-yellow-500 text-4xl">*</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center w-full py-7">
          <div className="border-r border-purple-600 w-full md:w-[43%]">
            <h1 className="text-4xl extra font-bold text-purple">
              1,000,000,000
            </h1>
            <h1 className="text-2xl font-bold text-dark">TOTAL SUPPLY</h1>
            <div className="relative py-4 px-5 flex items-center justify-around gap-3 bg-white max-w-lg border border-purple-600 mt-5">
              <p className="text-dark text-xl font-bold">
                {" "}
                2x383DJSDHSDBSSDSDSD7739383DSDDDDD
              </p>

              <button>
                <TbCopy size={30} className="text-purple" />
              </button>
              <div className="w-full h-full bg-purple absolute z-[-1] rotate-2">
                {" "}
                s
              </div>
            </div>
          </div>
          <div className="w-full md:w-[57%] mt-12 md:mt-0">
            <ul className=" flex flex-col md:flex-row items-center justify-around gap-7 md:gap-0">
              {tokenomics.map((item, index) => (
                <li
                  key={index}
                  className="text-purple text-4xl font-bold border-r border-purple-600 pr-5"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
