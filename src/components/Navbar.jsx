import React from "react";
import Logo from "../assets/logo.svg";
import { LuMenu } from "react-icons/lu";

function Navbar() {
  const navLinks = ["Services", "Our Work", "About Us", "Insights", "Contact"];
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-NueueMontreal flex justify-between">
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
  );
}

export default Navbar;
