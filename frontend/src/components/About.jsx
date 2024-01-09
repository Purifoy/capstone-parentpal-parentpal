import React from "react";

function About() {
  return (
    <div className="flex justify-center mt-10">
      <div className="m-10 block max-w-4xl p-20 bg-[#F7EFE5] border border-gray-200 rounded-bl-3xl rounded-tr-3xl shadow">
        <h1 className="font-[Monserrat] text-center mb-5 text-3xl font-bold tracking-tight text-gray-900">
          About Us
        </h1>
        <p className="font-normal font-[Roboto] text-lg  text-gray-700 dark:text-gray-400">
          Welcome to ParentPal! At the heart of our mission is the commitment to
          streamline the journey of parenting by providing tools for smart baby
          schedule management and fostering the development of healthy routines.
          We understand the challenges that come with raising a child, and our
          goal is to empower parents with the resources they need to navigate
          this incredible journey with ease. Our platform is designed to offer
          support, guidance, and valuable resources, ensuring that every parent
          can enjoy the beautiful experience of parenthood while nurturing the
          well-being of their little ones. Join us on this adventure, where we
          make parenthood simpler, smarter, and more joyful.
        </p>
      </div>
    </div>
  );
}

export default About;
