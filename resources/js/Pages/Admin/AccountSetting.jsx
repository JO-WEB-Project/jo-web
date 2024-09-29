import React, { useState, useEffect } from "react";
import { useForm, usePage } from '@inertiajs/react';
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import LayoutSetting from "@/Components/Layout/LayoutSetting";
import MainTitle from "@/Components/Shared/MainTitle";
import Toaster from "@/Components/Toaster/Toaster";

const AccountSetting = () => {
    const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] = useState(false);
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        current_password: '',
        new_password: '',
        new_password_confirmation: '',
    });

    const [showToaster, setShowToaster] = useState(false);
    const [toasterType, setToasterType] = useState('');
    const [toasterMessage, setToasterMessage] = useState('');

    const { auth, pendingAdmins } = usePage().props;
    const userRole = auth.user.role

    useEffect(() => {
        if (auth && auth.user) {
            setData('email', auth.user.email);
        }
    }, [auth, setData]);

    const handleSaveChanges = (e) => {
        e.preventDefault();
    
        setShowToaster(false);
    
        post('/account-settings', {
            preserveScroll: true,
            onSuccess: () => {
                setData('current_password', '');
                setData('new_password', '');
                setData('new_password_confirmation', '');
    
                setToasterType('success');
                setToasterMessage('Account settings updated successfully.');
                setShowToaster(true);

                setTimeout(() => {
                    window.location.reload();
                }, 500);
            },
            onError: () => {
                setToasterType('warning');
                setToasterMessage('Failed to save changes. Please check the form for errors.');
                setShowToaster(true);
            },
        });
    };
    

    const toggleCurrentPasswordVisibility = () => {
        setIsCurrentPasswordVisible((prevState) => !prevState);
    };

    const toggleNewPasswordVisibility = () => {
        setIsNewPasswordVisible((prevState) => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible((prevState) => !prevState);
    };

    return (
        <LayoutSetting userRole={userRole} pendingAdmins={pendingAdmins}>
            <MainTitle
                title="Account Setting"
                description="This is how others will see you on the site."
            />
            <div className="flex flex-col gap-6">
                {/* Email Field */}
                <div className="flex flex-col gap-2 py-1">
                    <label
                        className="block text-sm font-bold text-gray-700"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="min-w-[400px] max-w-[600px] text-sm font-medium py-2 px-3 text-black text-opacity-80 rounded-lg placeholder:text-sm placeholder:font-semibold border-gray-300 focus:outline-none focus:border-black focus:ring-0 border"
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm">{errors.email}</span>
                    )}
                    <p className="text-sm text-opacity-60 text-black font-medium">
                        You can manage verified email addresses in your email settings.
                    </p>
                </div>

                {/* Current Password Field */}
                <div className="flex flex-col gap-2 py-1">
                    <label
                        className="block text-sm font-bold text-gray-700"
                        htmlFor="current-password"
                    >
                        Current Password
                    </label>
                    <div className="min-w-[400px] max-w-[600px] text-sm font-medium py-2 flex flex-row justify-between rounded-lg border px-3 border-gray-300">
                        <input
                            className="rounded-lg border-none w-full py-0 outline-none focus:ring-0 placeholder:text-sm"
                            type={isCurrentPasswordVisible ? "text" : "password"}
                            placeholder="Current password"
                            name="current_password"
                            autoComplete="new-password"
                            value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                        />
                        <button onClick={toggleCurrentPasswordVisibility}>
                            {isCurrentPasswordVisible ? (
                                <IoEyeSharp />
                            ) : (
                                <AiFillEyeInvisible />
                            )}
                        </button>
                    </div>
                    {errors.current_password && (
                        <span className="text-red-500 text-sm">{errors.current_password}</span>
                    )}
                    <p className="text-sm text-opacity-60 text-black font-medium">
                        Please enter your current password.
                    </p>
                </div>

                {/* New Password Field */}
                <div className="flex flex-col gap-2 py-1">
                    <label
                        className="block text-sm font-bold text-gray-700"
                        htmlFor="new-password"
                    >
                        New Password
                    </label>
                    <div className="min-w-[400px] max-w-[600px] text-sm font-medium py-2 flex flex-row justify-between rounded-lg border px-3 border-gray-300">
                        <input
                            className="border-none w-full py-0 outline-none focus:ring-0 placeholder:text-sm"
                            type={isNewPasswordVisible ? "text" : "password"}
                            placeholder="New password"
                            name="new_password"
                            value={data.new_password}
                            onChange={(e) => setData('new_password', e.target.value)}
                        />
                        <button onClick={toggleNewPasswordVisibility}>
                            {isNewPasswordVisible ? (
                                <IoEyeSharp />
                            ) : (
                                <AiFillEyeInvisible />
                            )}
                        </button>
                    </div>
                    {errors.new_password && (
                        <span className="text-red-500 text-sm">{errors.new_password}</span>
                    )}
                    <p className="text-sm text-opacity-60 text-black font-medium">
                        Please enter your new password.
                    </p>
                </div>

                {/* Confirm Password Field */}
                <div className="flex flex-col gap-2 py-1">
                    <label
                        className="block text-sm font-bold text-gray-700"
                        htmlFor="confirm-password"
                    >
                        Confirm New Password
                    </label>
                    <div className="min-w-[400px] max-w-[600px] text-sm font-medium py-2 flex flex-row justify-between rounded-lg border px-3 border-gray-300">
                        <input
                            className="border-none w-full py-0 outline-none focus:ring-0 placeholder:text-sm"
                            type={isConfirmPasswordVisible ? "text" : "password"}
                            placeholder="Confirm password"
                            name="new_password_confirmation"
                            value={data.new_password_confirmation}
                            onChange={(e) => setData('new_password_confirmation', e.target.value)}
                        />
                        <button onClick={toggleConfirmPasswordVisibility}>
                            {isConfirmPasswordVisible ? (
                                <IoEyeSharp />
                            ) : (
                                <AiFillEyeInvisible />
                            )}
                        </button>
                    </div>
                    {errors.new_password_confirmation && (
                        <span className="text-red-500 text-sm">{errors.new_password_confirmation}</span>
                    )}
                    <p className="text-sm text-opacity-60 text-black font-medium">
                        Please confirm your new password.
                    </p>
                </div>

                {/* Save Changes Button */}
                <button
                    className="px-4 py-3 rounded-lg w-32 text-sm font-semibold bg-black bg-opacity-100 hover:bg-opacity-80 text-white"
                    onClick={handleSaveChanges}
                    disabled={processing}
                >
                    {processing ? 'Saving...' : 'Save Changes'}
                </button>

                {showToaster && (
                    <Toaster
                        type={toasterType}
                        message={toasterMessage}
                    />
                )}
            </div>
        </LayoutSetting>
    );
};

export default AccountSetting;
