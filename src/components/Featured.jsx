import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-12">
        <h1 className="text-6xl">Featured Projects</h1>
      </div>
      <div className="px-20 py-12 cards w-full flex gap-10">
        <div className="card w-1/2 h-[80vh] bg-red-500"></div>
        <div className="card w-1/2 h-[80vh] bg-red-500"></div>
      </div>
    </div>
  );
}

export default Featured;
