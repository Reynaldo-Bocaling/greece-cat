import React from "react";
import { socialLinks } from "../constant";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 p-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="">
          <h1 className="font-title text-7xl text-WHITE font-bold">
            CONTACT US <span className="text-yellow-500 text-4xl">*</span>
          </h1>
          <ul className="flex items-center justify-center gap-9 mt-5">
            {socialLinks.map((item, index) => (
              <li
                key={index}
                className="FLEX items-center justify-center p-3 rounded-full bg-transparentGray"
              >
                <a href={item.url}>
                  <img src={item.img} alt="" className="w-[40px] h-[40px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex flex-wrap gap-2 items-center justify-center space-x-14 px-7 md:px-2">
            <a
              href="/privacy"
              className="text-xl text-gray-400 hover:text-white"
            >
              Privacy Policy
            </a>
            <a href="/terms" className="text-xl text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-xl text-gray-400 hover:text-white"
            >
              Contact Us
            </a>
          </div>
          <p className="text-xl md:text-2xl mb-12 md:mb-0">
            &copy; {new Date().getFullYear()} Greece Cat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
