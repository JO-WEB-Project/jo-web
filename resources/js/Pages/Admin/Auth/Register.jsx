// Register.jsx
import React, { useState } from "react";

const Register = () => {

    return (
        <div className="bg-white border border-black border-opacity-20 pt-4 p-6 pb-4 rounded-lg transition-opacity duration-300 ease-in-out">
            <h2 className="text-black text-opacity-80 text-3xl font-extrabold mb-2">
                Register
            </h2>
            <p className="text-black text-opacity-40 mb-4">
                Register Your Admin Account Here!
            </p>
            <div className="mb-4">
                <label className="block text-sm font-semibold text-black mb-1" htmlFor="name">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-3 text-black text-opacity-80 text-sm rounded-lg border border-gray-400"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-semibold text-black mb-1" htmlFor="username">
                    Username
                </label>
                <input
                    id="username"
                    type="text"
                    placeholder="johndoe12"
                    className={`w-full p-3 text-black text-opacity-80 text-sm rounded-lg border
                    }`}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-semibold text-black mb-1" htmlFor="email">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="johndoe@gmail.com"
                    className={`w-full p-3 text-black text-opacity-80 text-sm rounded-lg border
                    }`}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-semibold text-black mb-1" htmlFor="password">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="********"
                    className={`w-full p-3 text-black text-opacity-80 text-sm rounded-lg border 
                    }`}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-sm font-semibold text-black mb-1"
                    htmlFor="confirmpassword"
                >
                    Confirm Password
                </label>
                <input
                    id="confirmpassword"
                    type="password"
                    placeholder="********"
                    className={`w-full p-3 text-black text-opacity-80 text-sm rounded-lg border
                    }`}
                />
            </div>
            <button
                className={`bg-black bg-opacity-80 hover:bg-opacity-40 text-white py-2 px-4 rounded-lg w-full font-medium
                }`}
            >
                Register
            </button>
        </div>
    );
};

export default Register;
