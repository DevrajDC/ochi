import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function HeroSection() {
  return (
    <div className="h-screen w-full bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div className="masker">
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <div className="w-[120px] h-[85px] mr-5 rounded-lg bg-green-500"></div>
              )}
              <h1
                key={index}
                className="font-FoundersGroteskCondensed text-9xl font-light uppercase leading-[100px] h-full"
              >
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 flex items-center justify-between border-t-[1px] border-zinc-800 px-20 py-5 font-NueueMontreal">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index} className="text-md font-light leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-4">
          <div className="rounded-full border-[1px] border-zinc-500 px-5 py-2 text-sm font-light uppercase">
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
