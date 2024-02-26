import React from "react";
import Logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className="w-full flex bg-[#1d1f1e] p-20">
      <div className="w-1/2 h-full flex flex-col gap-20 justify-between">
        <h1 className="font-FoundersGroteskCondensed uppercase text-9xl leading-[100px] -mb-10">
          Eye- <br /> Opening
        </h1>
        <img src={Logo} className="w-16 hidden sm:block" alt="ochi logo" />
      </div>
      <div className="w-1/2 flex flex-col justify-between">
        <h1 className="font-FoundersGroteskCondensed uppercase text-8xl leading-[100px] -mb-10">
          Presentations
        </h1>
        <div className="links flex flex-col font-NueueMontreal mt-4">
          {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
            (item, index) => (
              <a key={index}>{item}</a>
            )
          )}
        </div>
        <div className="flex justify-between font-NueueMontreal">
          <p>© ochi design 2024. Legal Terms</p>
          <p>Website by Obys</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
