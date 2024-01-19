import React from "react";

function Team() {
  return (
    <div className="bg-[#FFD9B7] flex justify-center border-none cursor-auto">
      <div className="m-20 mb-30">
        <h1 className="font-[Play] justify-center text-center mb-10 text-3xl font-bold tracking-tight text-gray-900">
          Meet the Team
        </h1>
        <br></br>
        <div className="flex items-center justify-center gap-4 ">
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
        <div className="mt-5 mr-10">
          <ul className="flex flex-row justify-center gap-[115px] font-[Play] text-2xl">
            <li>Jonathan</li>
            <li>Aki</li>
            <li className="pr-2 pl-3">Yusuf</li>
            <li>Lavon</li>
            <li>Sky</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Team;
