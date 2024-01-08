import React from "react";

function Footer() {
  return (
    <footer className="bg-[#3D246C]  ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center">
            <img
              src="/src/assets/favicon.png"
              className="h-[60px]"
              alt="ParentPal Logo"
            />
            <span className="pt-5 text-3xl font-[Petit]">ParentPal</span>
          </div>
          <div>
            <ul className="flex justify-center gap-7 m-7">
              <li className="w-12 h-12">
                <img src="src/assets/slack_icon.png" alt="slack" />
              </li>
              <li className="w-12 h-12">
                <a
                  href="https://github.com/2023-Fall-Java-Cohort/capstone-parentpal-parentpal/tree/main"
                  target="_blank"
                >
                  <img src="src/assets/git_hub.png" alt="github" />
                </a>
              </li>
              <li className="w-12 h-12">
                <img src="src/assets/linkedin_logo.png" alt="linkedin" />
              </li>
            </ul>
          </div>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#FFD9B7] sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-[#FFD9B7] sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">
        &copy; {new Date().getFullYear()} ParentPal™. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
