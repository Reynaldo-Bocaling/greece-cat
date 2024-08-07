import React from "react";
import Marquee from "react-fast-marquee";

const SlidingText = () => {
  return (
    <div className="w-full  overflow-hidden  py-5 flex items-center justify-center md:justify-start gap-7 absolute -bottom-10 bg-purple Z-[] -rotate-2">
      <Marquee direction="right" className="">
        {" "}
        {Array.from({ length: 50 }, (_, i) => (
          <h1 className="text-2xl text-white px-20 flex items-center gap-12">
            GREECE
            <span className="text-3xl text-yellow-500 font-bold">*</span>
            CAT
          </h1>
        ))}
      </Marquee>
    </div>
  );
};

export default SlidingText;
