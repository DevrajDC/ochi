import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="w-full py-20 rounded-t-3xl bg-[#004D43]">
      <div className="text border-t-[1px] border-b-[1px] border-zinc-400 flex whitespace-nowrap gap-5 overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[20vw] leading-none font-FoundersGroteskCondensed uppercase mb-[3vw]"
        >
          We are Ochi ◦
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[20vw] leading-none font-FoundersGroteskCondensed uppercase mb-[3vw]"
        >
          We are Ochi ◦
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[20vw] leading-none font-FoundersGroteskCondensed uppercase mb-[3vw]"
        >
          We are Ochi ◦
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
