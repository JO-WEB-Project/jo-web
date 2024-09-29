import React from "react";
import Header from "@/Components/Layout/Header";
import MainTitle from "@/Components/Shared/MainTitle";
import { IoChevronBackOutline } from "react-icons/io5";
import AsideMenu from "@/Components/Partials/AsideMenu";
import { LuSettings } from "react-icons/lu";

const LayoutSetting = ( {userRole, pendingAdmins, children}) => {
    return (
        <div className="flex flex-col max-h-screen">
            <Header pendingAdmins={pendingAdmins} userRole={userRole}/>
            <div className="pl-10 pt-6 flex flex-col gap-4 max-h-screen overflow-hidden">
                <div className="flex flex-col justify-center gap-2 mb-0 pr-10">
                    <div className="flex flex-row gap-2 items-start">
                        <a
                            href="/admin/dashboard"
                            className="rounded-lg p-2 hover:bg-gray-100 flex justify-center items-center"
                        >
                            <IoChevronBackOutline size={20} />
                        </a>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-extrabold tracking-tight text-black text-opacity-80 ">
                                Settings
                            </h1>
                            <p className=" text-sm text-black text-opacity-60 mb-2">
                                Manage Your Account in here!
                            </p>
                        </div>
                    </div>

                    <hr className="w-full text-black border-[0.1px] border-black border-opacity-20" />
                </div>
                <div className="flex flex-row h-full w-full overflow-hidden">
                    <nav className="w-3/12 pr-2 h-full">
                        <ul className="flex flex-col gap-2">
                            <AsideMenu
                                icon={<LuSettings />}
                                menu={"Profile"}
                                path={"/Admin/ProfileSetting"}
                            />
                            <AsideMenu
                                icon={<LuSettings />}
                                menu={"Account"}
                                path={"/Admin/AccountSetting"}
                            />
                        </ul>
                    </nav>
                    <div className="w-full flex flex-col overflow-auto pr-10 pl-2 pb-16">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default LayoutSetting;
