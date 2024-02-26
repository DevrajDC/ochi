import React from "react";
import Logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className="w-full h-fit bg-[#1d1f1e]">
      <div className=" container m-auto md:flex-row flex flex-col px-20 py-10">
        <div className="md:w-1/2 w-full flex flex-col gap-10 justify-between">
          <h1 className="font-FoundersGroteskCondensed uppercase text-5xl md:text-8xl">
            Eye- <br /> Opening
          </h1>
          <img src={Logo} className="w-16 hidden md:block" alt="ochi logo" />
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-between gap-5">
          <div className="links flex flex-col font-NueueMontreal mt-10 md:mt-4">
            <h1 className="font-NueueMontreal text-3xl md:text-4xl mb-4 border-b-[1px] border-zinc-600 pb-4">
              Connect with us
            </h1>
            {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
              (item, index) => (
                <a key={index}>{item}</a>
              )
            )}
          </div>
          <div className="flex justify-between font-NueueMontreal">
            <p>© ochi design 2024.</p>
            <p>Website by Obys</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
