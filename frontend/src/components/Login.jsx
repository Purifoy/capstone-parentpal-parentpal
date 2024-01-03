import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", { username, password });
      console.log(response.data);

      if (response.data.success) {
        onLoginSuccess();
        navigate("/dashboard");
      } else {
        console.error("Login failed: ", response.data.message);
      }
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  return (
    <form className="font-[Roboto]">
      <input
        type="text"
        placeholder="username"
        className="mr-5 border-solid rounded "
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <span>
        <input
          type="password"
          placeholder="password"
          className="mr-3 border-solid rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleLogin}
        >
          Login
        </button>
      </span>
    </form>
  );
}

export default Login;
