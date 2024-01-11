import React from "react";

function Headline() {
  return (
    <div className="bg-[#FFD9B7] flex justify-center border-none cursor-auto">
      <section className="mb-10 border rounded-tl-3xl rounded-br-3xl bg-center bg-no-repeat bg-cover bg-[url('src/assets/baby2.jpg')] bg-gray-700 bg-blend-multiply select-none">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="font-[Play] mb-2 text-2xl text-white  md:text-4xl lg:text-5xl">
            Simplifying Parenthood with Smart Baby Schedule Management and
            Healthy Routine Development
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Our mission is to make every step of your parenting journey easier
            and smarter. Allow us to guide you on this fulfilling journey,
            providing support and resources every step of the way.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"></div>
        </div>
      </section>
    </div>
  );
}

export default Headline;
