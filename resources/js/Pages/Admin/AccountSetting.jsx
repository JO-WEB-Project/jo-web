import React, { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import LayoutSetting from "@/Components/Layout/LayoutSetting";
import MainTitle from "@/Components/Shared/MainTitle";
import Toaster from "@/Components/Toaster/Toaster";

const AccountSetting = () => {
    const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] =
        useState(false);
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
        useState(false);

    const [showToaster, setShowToaster] = useState(false);

    // Function to handle "Save Changes" button click
    const handleSaveChanges = () => {
        setShowToaster(true);

        setTimeout(() => {
            setShowToaster(false);
        }, 5000); 
    };

    // Function buat lihat passwordnya
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
        <LayoutSetting>
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
                        className="min-w-[400px] max-w-[600px] text-sm font-medium py-2 text-black text-opacity-80 rounded-lg placeholder:text-sm placeholder:font-semibold border-gray-300 focus:outline-none focus:border-black focus:ring-0"
                        type="email"
                        placeholder="dimasfierby@gmail.com"
                    />
                    <p className="text-sm text-opacity-60 text-black font-medium">
                        You can manage verified email addresses in your email
                        settings.
                    </p>
                </div>

                {/* Current Password Field */}
                <div className="flex flex-col gap-2 py-1">
                    <label
                        className="block text-sm font-bold text-gray-700"
                        htmlFor="current-password"
                    >
                        Password
                    </label>
                    <div className="min-w-[400px] max-w-[600px] text-sm font-medium py-2 text-black text-opacity-60 flex flex-row justify-between pr-6 rounded-lg border px-3 border-gray-300">
                        <p className="text-sm font-semibold">
                            {isCurrentPasswordVisible ? "Yhoga123" : "*******"}
                        </p>
                        <button onClick={toggleCurrentPasswordVisibility}>
                            {isCurrentPasswordVisible ? (
                                <IoEyeSharp />
                            ) : (
                                <AiFillEyeInvisible />
                            )}
                        </button>
                    </div>
                    <p className="text-sm text-opacity-60 text-black font-medium">
                        This is your current password.
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
                    <div className="min-w-[400px] max-w-[600px] text-sm font-medium py-2 text-black text-opacity-60 flex flex-row justify-between pr-6 rounded-lg border px-0 border-gray-300">
                        <input
                            className="border-none w-full py-0 outline-none focus:ring-0 placeholder:text-sm"
                            type={isNewPasswordVisible ? "text" : "password"}
                            placeholder="New password"
                        />
                        <button onClick={toggleNewPasswordVisibility}>
                            {isNewPasswordVisible ? (
                                <IoEyeSharp />
                            ) : (
                                <AiFillEyeInvisible />
                            )}
                        </button>
                    </div>
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
                    <div className="min-w-[400px] max-w-[600px] text-sm font-medium py-2 text-black text-opacity-60 flex flex-row justify-between pr-6 rounded-lg border px-0 border-gray-300">
                        <input
                            className="border-none w-full py-0 outline-none focus:ring-0 placeholder:text-sm"
                            type={
                                isConfirmPasswordVisible ? "text" : "password"
                            }
                            placeholder="Confirm password"
                        />
                        <button onClick={toggleConfirmPasswordVisibility}>
                            {isConfirmPasswordVisible ? (
                                <IoEyeSharp />
                            ) : (
                                <AiFillEyeInvisible />
                            )}
                        </button>
                    </div>
                    <p className="text-sm text-opacity-60 text-black font-medium">
                        Please confirm your new password.
                    </p>
                </div>

                {/* Save Changes Button */}
                <button
                    className="px-4 py-3 rounded-lg w-32 text-sm font-semibold bg-black bg-opacity-100 hover:bg-opacity-80 text-white"
                    onClick={handleSaveChanges}
                >
                    Save Changes
                </button>

                {showToaster && (
                    <Toaster
                        type="success"
                        message="Changes saved successfully!"
                    />
                )}
            </div>
        </LayoutSetting>
    );
};

export default AccountSetting;
