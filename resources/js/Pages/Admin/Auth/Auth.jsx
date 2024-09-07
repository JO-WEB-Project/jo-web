// Auth.jsx
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex flex-col justify-center p-4 items-center h-screen w-screen bg-white">
            <div className="w-full top-0 flex justify-center items-center mb-4">
                <img
                    className="max-w-36"
                    src="/Assets/Images/Logo.png"
                    alt="Logo"
                />
            </div>
            <div className="text-white p-0 rounded-lg w-full max-w-md">
                <div className="mb-2 flex justify-center space-x-0 bg-gray-100 rounded-lg relative border-4 border-gray-100">
                    <div
                        className={`absolute top-0 bottom-0 left-0 w-1/2 h-full rounded-lg bg-white transition-transform duration-300 ease-in-out transform ${
                            isLogin ? "translate-x-0" : "translate-x-full"
                        }`}
                    ></div>
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`flex flex-row justify-center items-center cursor-pointer w-full tracking-wide py-2 px-4 font-bold z-10 rounded-lg transition-all duration-300 ease-in-out ${
                            isLogin ? "text-black" : "text-gray-400"
                        }`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`flex flex-row justify-center items-center cursor-pointer w-full tracking-wide py-2 px-4 font-bold z-10 rounded-lg transition-all duration-300 ease-in-out ${
                            !isLogin ? "text-black" : "text-gray-400"
                        }`}
                    >
                        Register
                    </button>
                </div>

                {isLogin ? <Login /> : <Register />}
            </div>
        </div>
    );
};

export default Auth;
