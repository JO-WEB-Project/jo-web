import React from "react";
import Notifications from "../Partials/Notifications";
import Avatar from "../Partials/Avatar";
import Header from "./Header";
import Aside from "./Aside";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <div className="flex flex-row flex-grow overflow-hidden">
                <Aside/>
                {/* Content */}
                <main className="flex-grow p-6 bg-white-100 overflow-auto">
                    {children}
                </main>
            </div>

            {/* Main Content */}
        </div>
    );
};

export default Layout;
