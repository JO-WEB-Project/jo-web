import React from "react";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
    SelectGroup,
    SelectLabel,
    SelectSeparator,
} from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { BsDot } from "react-icons/bs";
import { IoIosDoneAll } from "react-icons/io";

const FilterCategory = ({ title, options }) => {
       
    return (
        <div className="relative inline-block w-full">
            <Select className="min-w-20">
                <SelectTrigger className="gap-1 py-3 w-full bg-white border border-whiten flex flex-row border-none justify-center items-center rounded-md px-1  text-sm focus:outline-none">
                    <SelectValue placeholder={title} />
                    <ChevronDown className="h-4 w-4 opacity-50" />
                </SelectTrigger>

                <SelectContent className="mt-4 rounded-lg bg-white border border-black border-opacity-40 w-full p-1">
                    <SelectGroup className="min-w-36">
                        {options.map((option, index) => (
                            <SelectItem
                                className=" cursor-pointer flex flex-row focus:outline-none hover:border-none p-2 rounded-lg  hover:bg-gray-100 justify-start items-center"
                                key={index}
                                value={option}
                            >
                                <IoIosDoneAll size={20} /> {option}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default FilterCategory;
