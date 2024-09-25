import React, { useState, useRef, useEffect } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BiGridSmall } from "react-icons/bi";
import DetailModal from "./DetailModal";
import ActionModal from "./ActionModal"; // Import ActionModal

const ListAllOrder = ({ data, index }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isActionModalOpen, setIsActionModalOpen] = useState(false); // State for ActionModal
    const [modalPosition, setModalPosition] = useState({});
    const [actionModalPosition, setActionModalPosition] = useState({}); // Position for ActionModal
    const modalRef = useRef(null);
    const actionModalRef = useRef(null);

    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsModalOpen(false);
        }
        if (
            actionModalRef.current &&
            !actionModalRef.current.contains(event.target)
        ) {
            setIsActionModalOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleDetailClick = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const modalHeight = 340;
        const top = rect.top + window.scrollY;
        const left = rect.left + window.scrollX;

        if (top + modalHeight > windowHeight * 0.9) {
            setModalPosition({ top: top - modalHeight, left });
        } else {
            setModalPosition({ top: top + rect.height, left });
        }

        setIsModalOpen(!isModalOpen);
    };

    const handleActionClick = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const modalHeight = 350; // Perkiraan tinggi ActionModal
        const top = rect.top + window.scrollY;
        const left = rect.left + window.scrollX;

        if (top + modalHeight > windowHeight * 0.9) {
            setActionModalPosition({ top: top - modalHeight, left });
        } else {
            setActionModalPosition({ top: top + rect.height, left });
        }

        setIsActionModalOpen(!isActionModalOpen);
    };

    return (
        <div className="mb-2 hover:bg-slate-100 hover:bg-opacity-60 bg-white w-auto grid grid-cols-12 gap-2 rounded-lg border-[0.1px] border-gray-300 shadow-none justify-center items-center">
            <div className="flex col-span-1 border-r border-black border-opacity-10 w-auto h-full px-4 py-2 font-bold flex-col justify-center items-center">
                {index + 1}
            </div>
            <div className="flex col-span-3 border-r border-black border-opacity-10 w-auto h-full px-4 py-2 font-medium text-sm flex-col justify-center items-start line-clamp-1">
                {data.Nama}
            </div>
            <div className="flex col-span-2 border-r border-black border-opacity-10 w-auto h-full px-4 py-2 font-medium text-sm flex-col justify-center items-center">
                {data.orderCode}
            </div>
            <div className="flex col-span-2 border-r border-black border-opacity-10 w-auto h-full px-4 py-2 font-medium text-sm flex-col justify-center items-center">
                {data.status}
            </div>
            <div className="flex col-span-2 border-r border-black border-opacity-10 w-auto h-full px-4 py-2 font-medium text-sm flex-col justify-center items-center">
                <button
                    onClick={handleDetailClick}
                    className="flex flex-row justify-center items-center px-6 py-2 rounded-lg hover:bg-white"
                >
                    <IoIosInformationCircleOutline size={20} />
                    <p className="ml-2 text-sm font-medium text-black">
                        Detail
                    </p>
                </button>
            </div>
            <div className="flex col-span-2 border-black border-opacity-10 w-auto h-full px-2 py-2 font-medium text-sm flex-col justify-center items-center">
                <button
                    onClick={handleActionClick}
                    className="flex flex-row justify-center rounded-lg items-center w-auto hover:bg-white p-2"
                >
                    <BiGridSmall size={20} />
                </button>
            </div>

            {/* Detail Modal */}
            {isModalOpen && (
                <DetailModal
                    data={data}
                    modalRef={modalRef}
                    modalPosition={modalPosition}
                />
            )}

            {/* Action Modal */}
            {isActionModalOpen && (
                <ActionModal
                    modalRef={actionModalRef}
                    modalPosition={actionModalPosition}
                />
            )}
        </div>
    );
};

export default ListAllOrder;
