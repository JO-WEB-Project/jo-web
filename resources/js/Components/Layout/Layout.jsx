import React from "react";
import Header from "./Header";
import Aside from "@/Components/Layout/Aside";

const Layout = ({ userRole, pendingAdmins, children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header pendingAdmins={pendingAdmins} userRole={userRole} />
      <div className="flex flex-row flex-grow overflow-hidden">
        <Aside userRole={userRole} />
        <main className="flex-grow p-6 bg-white-100 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
