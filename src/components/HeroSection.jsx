import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function HeroSection() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="container w-full"
    >
      <div className="textstructure py-[10vh]">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-center overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "16vw" }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 1,
                    delay: 1,
                  }}
                  className="w-[8vw] h-[5vh] sm:h-[6vh] sm:w-[5vw] sm:mt-5 mr-5 rounded-md bg-green-500"
                ></motion.div>
              )}
              <h1
                key={index}
                className="font-FoundersGroteskCondensed sm:-mb-[1vw] md:text-[10vw] sm:text-[12vw] text-[16vw] uppercase whitespace-nowrap leading-none h-full"
              >
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t-[1px] border-zinc-800 py-5 font-NueueMontreal">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-base font-light leading-none hidden sm:block"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-4">
          <div className="rounded-full border-[1px] font-NueueMontreal border-zinc-500 px-5 py-2 text-sm font-light whitespace-nowrap uppercase">
            Start the Project
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-zinc-500">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
