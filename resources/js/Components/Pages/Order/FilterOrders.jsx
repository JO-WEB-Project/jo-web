import React, { useState, useEffect } from "react";
import FilterCategory from "@/Components/Partials/FilterCategory";
import { LuFilter } from "react-icons/lu";
import { BiReset } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { MdOutlineClear } from "react-icons/md";

const FilterOrders = () => {
    const pengirimanOptions = ["JNE", "TIKI", "SiCepat", "Gojek"];
    const fakultasOptions = ["Teknik", "Ekonomi", "Ilmu Komputer", "Hukum"];
    const pembayaranOptions = ["Cash", "Transfer", "E-Wallet"];

    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const toggleTooltip = (visible) => {
        setIsTooltipVisible(visible);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            setIsTooltipVisible(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full flex flex-row justify-between mb-4">
            <div className="bg-white shadow-md w-auto px-3 flex flex-row gap-2 rounded-lg border-[0.1px] border-black border-opacity-60 justify-center items-center">
                <LuFilter size={25} color="gray" className="w-16" />
                <FilterCategory
                    title="Pengiriman"
                    options={pengirimanOptions}
                />
                <FilterCategory title="Fakultas" options={fakultasOptions} />
                <FilterCategory
                    title="Pembayaran"
                    options={pembayaranOptions}
                />

                <div className="relative">
                    <button
                        onMouseEnter={() => toggleTooltip(true)}
                        onMouseLeave={() => toggleTooltip(false)}
                        className="flex flex-row justify-center items-center rounded hover:bg-gray-100 p-1"
                    >
                        <BiReset size={20} />
                    </button>
                    {isTooltipVisible && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-400 mt-3 text-xs p-2 w-auto bg-white rounded-md shadow-lg border border-gray-200">
                            Reset
                        </div>
                    )}
                </div>
            </div>
            <div className="bg-white shadow-md w-[500px] px-3 flex flex-row gap-2 rounded-lg border-[0.1px] border-black border-opacity-60 justify-start items-center">
                <FiSearch size={25} color="black" />
                <input
                    style={{
                        outline: "none",
                        border: "none",
                        boxShadow: "none",
                        WebkitBoxShadow: "none",
                        MozBoxShadow: "none",
                    }}
                    className="border-none rounded-lg w-full flex justify0center items-center focus-within:outline-none peer-focus-within:outline-none placeholder:text-sm placeholder:text-black placeholder:text-opacity-60"
                    type="text"
                    placeholder="Search Name"
                />
                <button className="rounded-full p-1 hover:bg-gray-100">
                    <MdOutlineClear size={20} />
                </button>
            </div>
        </div>
    );
};

export default FilterOrders;
