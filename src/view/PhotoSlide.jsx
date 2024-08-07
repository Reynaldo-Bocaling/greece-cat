import React from "react";
import HorizontalWrapper from "../components/HorizontalWrapper";
import { motion } from "framer-motion";
import { gallery } from "../constant";

const PhotoSlide = () => {
  return (
    <section id="photoSlide" className="relative w-ful1 -mt-7">
      <div className="max-w-7xl mx-auto flexColCenter overflow-x-hidden">
        <HorizontalWrapper height="15rem" direction={-700}>
          <div className="absolute flex gap-7 w-[2000px] ">
            {gallery.map((item, i) => (
              <div key={i} className="   max-w-[200px]">
                <img
                  src={item}
                  alt=""
                  className="w-full h-[150px] rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </HorizontalWrapper>
      </div>
    </section>
  );
};

export default PhotoSlide;
