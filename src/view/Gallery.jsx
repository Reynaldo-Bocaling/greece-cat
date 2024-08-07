import React from "react";
import { motion } from "framer-motion";
import { gallery } from "../constant";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="w-full relative py-20 bg-dark rounded-t-[15rem] overflow-hidden mt-14"
    >
      <div className="relative max-w-7xl mx-auto flexColCenter gap-9 z-[998]">
        <h1 className="title text-7xl text-white font-bold  text-center mb-12">
          GALLERY{" "}
          <span className="text-center text-yellow-500 text-4xl">*</span>
        </h1>
        <div className="w-full columns-2 gap-2 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-ms cursor-cell z-[99]"
            >
              <img
                src={item}
                alt=""
                className="hover:scale-[1.1] duration-500 transition-all ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
