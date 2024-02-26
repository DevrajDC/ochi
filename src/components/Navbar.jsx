import React from "react";
import Logo from "../assets/logo.svg";
import { LuMenu } from "react-icons/lu";

function Navbar() {
  const navLinks = ["Services", "Our Work", "About Us", "Insights", "Contact"];
  return (
    <div className="sticky bg-zinc-900/40 backdrop-blur-md top-0 z-[999] w-full px-20 py-5">
      <div className="container m-auto font-NueueMontreal flex justify-between">
        <div className="logo">
          <img src={Logo} alt="ochi logo" />
        </div>
        <div className="links items-center gap-10 hidden md:flex">
          {navLinks.map((item, index) => (
            <a
              key={index}
              className={`text-md font-light capitalize whitespace-nowrap ${
                index === 4 && "ml-[10vw]"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
        <LuMenu className="md:hidden block text-4xl" />
      </div>
    </div>
  );
}

export default Navbar;
