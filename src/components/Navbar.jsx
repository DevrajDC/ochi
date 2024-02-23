import React from "react";
import Logo from "../assets/logo.svg";

function Navbar() {
  const navLinks = ["Services", "Our Work", "About Us", "Insights", "Contact"];
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-NueueMontreal flex justify-between">
      <div className="logo">
        <img src={Logo} alt="ochi logo" />
      </div>
      <div className="links flex gap-10">
        {navLinks.map((item, index) => (
          <a
            key={index}
            className={`text-md font-light capitalize ${
              index === 4 && "ml-32"
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
