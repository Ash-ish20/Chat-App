import React from "react";

const Signup = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Signup</h2>
      <form className="space-y-3">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
