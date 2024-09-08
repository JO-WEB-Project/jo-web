import React from "react";

const AsideMenu = ({ icon, menu, path }) => {
    return (
        <li className="">
            <a
                href={path}
                className="flex items-center px-4 p-2 text-gray-800 rounded hover:bg-gray-200"
            >
                <span className="mr-3">{icon}</span>
                <p className="font-semibold text-[13px]">{menu}</p>
            </a>
        </li>
    );
};

export default AsideMenu;
