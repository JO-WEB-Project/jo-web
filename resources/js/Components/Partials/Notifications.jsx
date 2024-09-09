import React, { useState, useRef, useEffect } from "react";
import { GoBellFill } from "react-icons/go";
import { FaDollarSign, FaUserClock } from "react-icons/fa";

const Notifications = () => {
    const [isOpen, setIsOpen] = useState(false);
    const notificationRef = useRef(null);

    // Function to toggle notification dropdown
    const toggleNotifications = () => {
        setIsOpen(!isOpen);
    };

    // Close the notification if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [notificationRef]);

    return (
        <div className="relative" ref={notificationRef}>
            {/* Notification bell icon */}
            <button
                onClick={toggleNotifications}
                className="group p-2 text-gray-600 hover:bg-gray-200 rounded-lg focus:outline-none"
            >
                <GoBellFill size={22} className="group-hover:text-black" />
            </button>

            {/* Notifications modal */}
            {isOpen && (
                <div className="absolute right-0 mt-3 w-[400px] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="flex flex-col p-4 pt-1 gap-1 pb-1 border-b border-gray-200">
                        <p className="text-md font-semibold">Notifications</p>
                    </div>
                    <div className="px-1 overflow-scroll h-48 py-1 flex flex-col items-start">
                        {/* Notification items */}
                        <button className="flex flex-row justify-start h-full items-center w-full py-2 px-3 rounded-md hover:bg-gray-100">
                            <FaDollarSign
                                size={25}
                                className="flex justify-center items-center mr-4"
                            />
                            <div className="flex flex-col items-start justify-start">
                                <span className="text-xs font-semibold text-green-800">
                                    Orderan - 08.00
                                </span>
                                <p className="text-xs font-semibold text-left line-clamp-1">
                                    Pesanan papermob + buku masuk dari nama nama
                                    nama nama
                                </p>
                            </div>
                        </button>
                        <button className="flex flex-row justify-start h-full items-center w-full py-2 px-3 rounded-md hover:bg-gray-100">
                            <FaDollarSign
                                size={25}
                                className="flex justify-center items-center mr-4"
                            />
                            <div className="flex flex-col items-start justify-start">
                                <span className="text-xs font-semibold text-green-800">
                                    Orderan - 08.00
                                </span>
                                <p className="text-xs font-semibold text-left line-clamp-1">
                                    Pesanan papermob + buku masuk dari nama nama
                                    nama nama
                                </p>
                            </div>
                        </button>
                        <button className="flex flex-row justify-start h-full items-center w-full py-2 px-3 rounded-md hover:bg-gray-100">
                            <FaDollarSign
                                size={25}
                                className="flex justify-center items-center mr-4"
                            />
                            <div className="flex flex-col items-start justify-start">
                                <span className="text-xs font-semibold text-green-800">
                                    Orderan - 08.00
                                </span>
                                <p className="text-xs font-semibold text-left line-clamp-1">
                                    Pesanan papermob + buku masuk dari nama nama
                                    nama nama
                                </p>
                            </div>
                        </button>
                        <button className="flex flex-row justify-start h-full items-center w-full py-2 px-3 rounded-md hover:bg-gray-100">
                            <FaUserClock
                                size={25}
                                className="flex justify-center items-center mr-4"
                            />
                            <div className="flex flex-col items-start justify-start">
                                <span className="text-xs font-semibold text-green-800">
                                    Register - 09.00
                                </span>
                                <p className="text-xs font-semibold text-left line-clamp-1">
                                    Register admin baru menunggu persetujuan -
                                    nama nama nama nama namfdgf ngv
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Notifications;
