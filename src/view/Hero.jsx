import React from "react";
import { GoArrowRight } from "react-icons/go";
import SlidingText from "../components/SlidingText";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full bg-dark py-14">
      <div className="relative max-w-7xl mx-auto px-5 z-[99]">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-8xl text-white font-medium flex flex-wrap items-center justify-center gap-5 leading-[4rem] md:leading-[6.5rem] text-center">
            Embrace the{" "}
            <p className="text-lg font-extra text-purple tracking-wider bg-reds-500 max-w-md px-9">
              Join the movement to celebrate and support Greece's stray cats
              with our unique crypto.
            </p>{" "}
            Stray Cats of Greece with Our New Token
          </h1>
          <p className="text-sm text-yellow-500 max-w-sm border ml-auto border-yellow-500 rounded-full py-3 px-7 mt-5 md:-translate-y-28 md:-translate-x-20">
            Support stray cats with every transaction.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 -mt-12">
          <div className="w-full md:w-1/4 ">
            <button className="font-normal text-xl text-black font-bold pl-5 pr-2 py-2 w-full rounded-full bg-yellow-500 flex items-center justify-between gap-12 duration-300 transition-all hover:translate-x-5">
              Buy Now Tokens
              <p className="h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center">
                <GoArrowRight size={25} />
              </p>
            </button>
            <div className="bg-transparentGray rounded-2xl py-7 px-5 mt-5 flex">
              <img src="/img/hero_img1.jpg" className="w-2/3" alt="" />
              <img src="/img/hero_img2.jpg" className="w-1/3" alt="" />
            </div>
          </div>
          <div className="flex-1 relative bg-transparentGray  rounded-2xl  px-5 flex items-start overflow-hidden">
            <div className="w-full md:w-1/2 py-7 px-4 z-[99]">
              <h1 className="text-3xl font-title text-white">
                Earn with Every Cat Today{" "}
                <span className="text-yellow-500 text-4xl">*</span>
              </h1>
              <p className="font-normal text-slate-200 font-light tracking-wider mt-5">
                Explore our unique phone designs featuring cat collages and
                start earning today!
              </p>
            </div>
            <img
              src="/img/main-phone.png"
              className="w-1/2 md:rotate-[24deg] translate-y-40 md:translate-y-20 md:-translate-x-7 z-[99]"
              alt=""
            />
            <img
              src="/img/hero_img3.jpg"
              alt=""
              className="absolute -left-36 -bottom-10 z-[1] opacity-[0.05]"
            />
          </div>
          <div className="w-full md:w-1/4 relative bg-yellow-500  rounded-2xl py-7 px-5 overflow-hidden">
            <div className="relative flex flex-wrap z-[99]">
              {" "}
              <h1 className="font-normal text-xl">
                Invest in our unique Greece Cat Tokens. Celebrate stray cats and
                join the crypto revolution today!
              </h1>
              <button className="font-normal text-purple text-lg font-medium  bg-white py-2 px-7 rounded-full mt-5">
                Earn
              </button>
            </div>
            <img
              src="/img/hero_img4.png"
              className="rotate-12 absolute top-0 -right-20 z-[1] opacity-[0.5] w-ful"
              alt=""
            />
          </div>
        </div>
      </div>
      <SlidingText />
    </section>
  );
};

export default Hero;
