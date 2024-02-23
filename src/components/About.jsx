import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
  return (
    <div className="w-full p-10 bg-[#CDEA68] rounded-t-3xl text-black font-NueueMontreal md:p-20">
      <h1 className="text-[3vw] leading-[4vw] font-medium mb-[3vw] border-b-[1px] border-zinc-900 pb-[2vw]">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="md:flex justify-center gap-10">
        <div className="about-text h-fit">
          <h1 className="text-[3vw] leading-[4vw] font-semibold mb-[1vw]">
            Our approach:
          </h1>
          <p className="text-[2vw]">
            Our approach at Ochi is tailored to empower fast-growing tech
            businesses by facilitating fundraising, product sales, simplifying
            complex concepts, and enabling effective talent acquisition.
          </p>
          <div className="rounded-full flex gap-2 justify-center mt-[2vw] w-fit bg-zinc-900 text-zinc-300 px-[2vw] py-[1vw] text-[1vw] font-semibold uppercase">
            Read more
            <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px]" />
          </div>
        </div>
        <img
          className="w-full rounded-3xl mt-4 md:w-[40vw] md:mt-0"
          src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
          alt="about us"
        />
      </div>
      <div className="w-full border-t-"></div>
    </div>
  );
}

export default About;
