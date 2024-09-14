import React from 'react';
import { useForm } from '@inertiajs/react';

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        username: '', // Added username field
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="bg-white border border-black border-opacity-20 pt-4 p-6 pb-4 rounded-lg transition-opacity duration-300 ease-in-out">
            <h2 className="text-black text-opacity-80 text-3xl font-extrabold mb-2">Register</h2>
            <p className="text-black text-opacity-40 mb-4">Register Your Admin Account Here!</p>
            <form onSubmit={submit}>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-black mb-1" htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full p-3 text-black text-opacity-80 text-sm rounded-lg border border-gray-400"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-black mb-1" htmlFor="username">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="johndoe12"
                        className="w-full p-3 text-black text-opacity-80 text-sm rounded-lg border"
                        value={data.username}
                        onChange={(e) => setData('username', e.target.value)}
                    />
                    {errors.username && <p className="text-red-500 text-sm mt-2">{errors.username}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-black mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="johndoe@gmail.com"
                        className="w-full p-3 text-black text-opacity-80 text-sm rounded-lg border"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-black mb-1" htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="********"
                        className="w-full p-3 text-black text-opacity-80 text-sm rounded-lg border"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-black mb-1" htmlFor="password_confirmation">
                        Confirm Password
                    </label>
                    <input
                        id="password_confirmation"
                        type="password"
                        placeholder="********"
                        className="w-full p-3 text-black text-opacity-80 text-sm rounded-lg border"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                    />
                    {errors.password_confirmation && (
                        <p className="text-red-500 text-sm mt-2">{errors.password_confirmation}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-black bg-opacity-80 hover:bg-opacity-40 text-white py-2 px-4 rounded-lg w-full font-medium"
                    disabled={processing}
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
