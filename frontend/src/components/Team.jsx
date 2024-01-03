import React from "react";

function Team() {
  return (
    <div className="bg-[#FFD9B7] flex justify-center border-none cursor-auto">
      <div href="#" className="m-40 ">
        <h1 className="font-[Monserrat] justify-center text-center mb-10 text-3xl font-bold tracking-tight text-gray-900">
          Meet the Team
        </h1>
        <br></br>
        <div className="flex items-center justify-center gap-5 ">
          <div className="w-60 h-60 rounded-full bg-gray-300 flex items-center justify-center">
            <img
              src="src/profile_pic/craig.jpg"
              alt="Jonathan"
              className="rounded-full"
            />
          </div>
          <div className="w-60 h-60 rounded-full bg-gray-300 flex items-center justify-center">
            <img
              src="src/profile_pic/aki.jpg"
              alt="Aki"
              className="rounded-full"
            />
          </div>
          <div className="w-60 h-60 rounded-full bg-gray-300 flex items-center justify-center">
            <img
              src="src/profile_pic/yusef.jpg"
              alt="Yusuf"
              className="rounded-full"
            />
          </div>
          <div className="w-60 h-60 rounded-full bg-gray-300 flex items-center justify-center">
            <img
              src="src/profile_pic/lavon.jpg"
              alt="Lavon"
              className="rounded-full"
            />
          </div>
          <div className="w-60 h-60 rounded-full bg-gray-300 flex items-center justify-center">
            <img
              src="src/profile_pic/sky.jpg"
              alt="Sky"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
