import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const Login = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="bg-white border border-black border-opacity-20 p-6 rounded-lg transition-opacity duration-300 ease-in-out">
            <h2 className="text-black text-opacity-80 text-3xl font-extrabold mb-2">
                Sign In
            </h2>
            <p className="text-black text-opacity-40 mb-4">
                Login with your admin account here!
            </p>
            <form onSubmit={submit}>
                <div className="mb-4">
                    <label
                        className="block text-sm font-semibold text-black mb-1"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="johndoe12@example.com"
                        className="w-full p-3 text-sm rounded-lg text-black border"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                    )}
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
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-2">{errors.password}</p>
                    )}
                </div>
                <div className="block mb-6">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-black">
                            Remember me
                        </span>
                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-black bg-opacity-80 hover:bg-opacity-40 text-white py-2 px-4 rounded-lg w-full font-medium"
                    disabled={processing}
                >
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default Login;
