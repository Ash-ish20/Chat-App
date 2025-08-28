import { useState } from "react";
import Login from "../component/Login";
import Signup from "../component/Signup";

const Home = () => {
  const [activeTab, setActiveTab] = useState("login"); // default is login

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center w-full max-w-md p-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6 text-blue-600">
          Welcome to Chat App
        </h1>

        {/* Card Box */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          {/* Tab Buttons */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setActiveTab("login")}
              className={`px-4 py-2 font-medium rounded-l-md transition-all duration-300 
              ${activeTab === "login" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`px-4 py-2 font-medium rounded-r-md transition-all duration-300 
              ${activeTab === "signup" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              Signup
            </button>
          </div>

          {/* Forms with smooth transition */}
          <div className="relative min-h-[250px]">
            {/* Login */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeTab === "login" ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Login />
            </div>

            {/* Signup */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeTab === "signup" ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Signup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
