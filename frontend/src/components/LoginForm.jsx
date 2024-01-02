import React from "react";

const LoginForm = () => {
  return (
    <div className="font-[Roboto]">
      <input
        type="text"
        placeholder="username"
        className="mr-5 border-solid rounded "
      />
      <span>
        <input
          type="text"
          placeholder="password"
          className="mr-3 border-solid rounded"
        />

        {/* put username and password input box here  */}
        <button
          type="button"
          className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Login
        </button>
      </span>
    </div>
  );
};

export default LoginForm;
