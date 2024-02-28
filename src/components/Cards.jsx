import React from "react";

function Cards() {
  return (
    <div className="container w-full flex flex-col md:flex-row gap-5 py-20">
      <div className="card relative flex items-center justify-center lg:w-1/2 md:w-full h-96 bg-[#004D43] rounded-xl">
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt="ochi"
          className="w-[25%]"
        />
        <button className="absolute left-5 bottom-5 px-5 py-2 rounded-full border text-xs sm:text-base font-NueueMontreal border-zinc-200">
          © 2019–2022
        </button>
      </div>
      <div className="cardcontainer flex gap-5 lg:w-1/2 md:w-full">
        <div className="card relative flex items-center justify-center w-1/2 h-96 bg-[#293231] rounded-xl">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="ochi"
            className="w-[50%]"
          />
          <button className="absolute left-5 bottom-5 px-5 py-2 rounded-full border text-xs sm:text-base font-NueueMontreal border-zinc-200">
            © 2019–2022
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-1/2 h-96 bg-[#293231] rounded-xl">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="ochi"
            className="w-[50%] mix-blend-lighten"
          />
          <button className="absolute left-5 bottom-5 px-5 py-2 rounded-full border text-xs sm:text-base font-NueueMontreal border-zinc-200">
            © 2019–2022
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
