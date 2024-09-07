// Login.jsx
import React from "react";

const Login = () => {
    return (
        <div className="bg-white border border-black border-opacity-20 p-6 rounded-lg transition-opacity duration-300 ease-in-out">
            <h2 className="text-black text-opacity-80 text-3xl font-extrabold mb-2">
                Sign In
            </h2>
            <p className="text-black text-opacity-40 mb-4">
                Login with your admin account here!
            </p>
            <div className="mb-4">
                <label
                    className="block text-sm font-semibold text-black mb-1"
                    htmlFor="username"
                >
                    Username
                </label>
                <input
                    id="username"
                    type="text"
                    placeholder="johndoe12"
                    className="w-full p-3 text-sm rounded-lg text-black border"
                />
            </div>
            <div className="mb-6">
                <label
                    className="block text-sm font-semibold text-black mb-1"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="********"
                    className="w-full p-3 text-sm rounded-lg border text-black"
                />
            </div>
            <button className="bg-black bg-opacity-80 hover:bg-opacity-40 text-white py-2 px-4 rounded-lg w-full font-medium">
                Sign In
            </button>
        </div>
    );
};

export default Login;
