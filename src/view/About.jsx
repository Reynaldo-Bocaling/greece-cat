import React from "react";

const About = () => {
  return (
    <section id="about" className="relative w-full ">
      <div className="max-w-7xl mx-auto flex items-center flex-col md:flex-row justify-center gap-20 px-4 mt-28 md:mt-0">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="font-title text-7xl text-dark font-bold">
            GET TO KNOW US <span className="text-yellow-500 text-4xl">*</span>
          </h1>
          <p
            className="font-normal
           text-lg text-gray-600 tracking-wide"
          >
            Hello. I recently took a trip to Mykonos,Greece. While i was out
            there i saw so many cats in Mykonos. Everywhere we went from the
            town, to the parties, on the beach, and even back at the villas
            there were cats everywhere. After a few shots i had brilliant idea..
            to make a token called Cats In Greece, inspired by "Niggas In
            Paris".
          </p>
          <p
            className="font-normal
           text-lg text-gray-600 tracking-wide mt-4"
          >
            Maybe I was just drunk but its only right we show love to all the
            stray cats out there. There's a billion meme coins on cats that are
            pets but none for stray cats. So Cats In Greece is for all the real
            ones, the stray cats that belong to no one but the streets.
          </p>
          <div className="relative flex gap-5">
            <div className="w-1/2 bg-yellow-500">
              <img
                src="/img/about_img1.jpg"
                alt=""
                className="w-full rotate-3"
              />
            </div>
            <div className="w-1/2 bg-purple flex items-center">
              <img
                src="/img/about_img2.jpg"
                alt=""
                className="w-full rotate-3"
              />
            </div>
            <button className="text-white text-lg font-semibold bg-purple rounded-full py-4 px-20 border-[2px]  absolute -bottom-12 left-1/2 -translate-x-1/2 -rotate-3 duration-300 transition-all hover:-translate-y-5">
              Buy Now
            </button>
            <img
              src="/img/ball4.webp"
              className="w-[70px] absolute top-16 -left-20"
              alt=""
            />
            <img
              src="/img/ball5.png"
              className="w-[70px] absolute bottom-10 -left-32"
              alt=""
            />
            <img
              src="/img/ball1.png"
              className="w-[70px] absolute bottom-0 -right-20"
              alt=""
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-red-500s relative">
          <img src="/img/about.png" alt="" />
          <img
            src="/img/ball1.png"
            className="w-[70px] absolute top-0 md:top-40 left-3"
            alt=""
          />
          <img
            src="/img/ball4.webp"
            className="w-[70px] absolute top-16 right-0 md:left-1/2 -translate-x-1/2"
            alt=""
          />
        </div>
        <img
          src="/img/ball5.png"
          className="w-[70px] absolute top-60 right-64 hidden md:flex"
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
