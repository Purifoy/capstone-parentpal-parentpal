import React from "react";

function Team() {
  return (
    <div className="bg-[#FFD9B7] flex justify-center border-none cursor-auto">
      <div className="m-40">
        <h1 className="font-[Play] justify-center text-center mb-10 text-3xl font-bold tracking-tight text-gray-900">
          Meet the Team
        </h1>
        <br></br>
        <div className="flex items-center justify-center gap-5 ">
          <div className="w-40 h-40 rounded-full bg-slate-800 flex items-center justify-center">
            <img
              src="src/assets/joshua.png"
              alt="Jonathan"
              className="w-30 h-40 rounded-full"
            />
          </div>
          <div className="w-40 h-40 rounded-full bg-slate-800 flex items-center justify-center">
            <img src="src/assets/aki.jpg" alt="Aki" className="rounded-full" />
          </div>
          <div className="w-40 h-40 rounded-full bg-slate-800 flex items-center justify-center">
            <img
              src="src/assets/yusuf.jpg"
              alt="Yusuf"
              className="w-30 h-40 rounded-full"
            />
          </div>
          <div className="w-40 h-40 rounded-full bg-slate-800 flex items-center justify-center">
            <img
              src="src/assets/lavon.png"
              alt="Lavon"
              className="w-30 h-50 rounded-full"
            />
          </div>
          <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center">
            <img src="src/assets/sky.jpg" alt="Sky" className="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
