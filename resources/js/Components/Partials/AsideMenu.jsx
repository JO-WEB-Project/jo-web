import React from "react";

const AsideMenu = ({ icon, menu, path }) => {
    // Check if the current path matches the href path
    const isActive = window.location.pathname === path;

    return (
        <li>
            <a
                href={path}
                className={`flex items-center px-4 p-2 rounded hover:bg-gray-100 ${
                    isActive ? "bg-gray-100 text-black" : "text-gray-800"
                }`}
            >
                <span className="mr-3">{icon}</span>
                <p className="font-semibold text-[13px]">{menu}</p>
            </a>
        </li>
    );
};

export default AsideMenu;
