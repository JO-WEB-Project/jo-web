import React, { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";
import { GoBellFill } from "react-icons/go";

const Notifications = () => {
    const [isOpen, setIsOpen] = useState(false);
    const notificationRef = useRef(null);

    const notifications = ["Makan stock habis", "Hello stock habis"];

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
            <button
                onClick={toggleNotifications}
                className="group p-2 text-gray-600 hover:bg-gray-200 rounded-lg focus:outline-none"
            >
                <GoBellFill size={22} className="group-hover:text-black" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <div className="p-4 font-bold border-b border-gray-100">
                        Notification
                    </div>
                    <ul className="py-2">
                        {notifications.map((notification, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 hover:bg-gray-100"
                            >
                                {notification}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Notifications;
