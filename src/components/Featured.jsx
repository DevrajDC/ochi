import { motion, useAnimation } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Featured() {
  // array to animate two cards
  const cards = [useAnimation(), useAnimation()];
  // receives index and animates that card only
  const handleHoverStart = (index) => {
    cards[index].start({
      y: "0",
    });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({
      y: "100%",
    });
  };
  return (
    <div className="container m-auto py-20 pb-0">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-12">
        <h1 className="text-6xl">Featured Projects</h1>
      </div>
      <div className="px-20 py-12 cards w-full flex flex-col md:flex-row gap-10">
        <motion.div
          onHoverStart={() => handleHoverStart(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-fit"
        >
          <h1 className="absolute text-[#CDEA68] flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none tracking-tighter">
            {"FIDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full rounded-xl overflow-hidden">
            <img
              className="w-full "
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4f077er9cq2y21uzfa6g.png"
              alt="featured"
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHoverStart(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-auto"
        >
          <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none tracking-tighter">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pczeaazxnqv1zpc1z4dz.png"
              alt="featured"
            />
          </div>
        </motion.div>
      </div>
      <div className="m-auto rounded-full flex gap-2 justify-center mt-4 w-fit bg-[#004D43] font-NueueMontreal text-zinc-100 px-10 py-3 text-sm tracking-wider font-semibold uppercase">
        See all Projects
        <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px]" />
      </div>
    </div>
  );
}

export default Featured;
