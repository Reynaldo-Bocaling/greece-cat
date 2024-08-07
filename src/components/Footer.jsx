import React from "react";
import { socialLinks } from "../constant";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 p-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="">
          <h1 className="font-title text-5xl md:text-7xl text-WHITE font-bold">
            CONTACT US <span className="text-yellow-500 text-4xl">*</span>
          </h1>
          <ul className="flex items-center justify-center gap-9 mt-5">
            {socialLinks.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-[60px] h-[60px] p-3 rounded-full bg-transparentGray"
              >
                <a href={item.url}>
                  <img src={item.img} alt="" className="w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-7">
          <p className="text-lg md:text-2xl mt-12 mb-12 md:mb-0">
            &copy; {new Date().getFullYear()} Greece Cat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
