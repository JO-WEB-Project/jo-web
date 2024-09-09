import React from "react";
import { MdContentCopy, MdDeleteOutline } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPrint } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";

const ActionModal = ({ modalRef, modalPosition }) => {
    return (
        <div
            ref={modalRef}
            style={{ top: modalPosition.top, left: modalPosition.left }}
            className="absolute pb-0 -translate-x-24 mt-3 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
        >
            <div className="flex flex-col p-4 pt-1 gap-1 pb-1 border-b border-gray-200">
                <p className="text-md font-semibold">Actions</p>
            </div>
            <div className="px-1 py-1 flex flex-col">
                <button className="flex flex-row justify-start w-full py-2 px-3 gap-4 rounded-md hover:bg-gray-100">
                    <MdContentCopy size={18} />
                    <span className="text-sm font-medium">Copy Nama</span>
                </button>
                <button className="flex flex-row justify-start w-full py-2 px-3 gap-4 rounded-md hover:bg-gray-100">
                    <MdContentCopy size={18} />
                    <span className="text-sm font-medium">
                        Copy Kode Pesanan
                    </span>
                </button>
                <button className="flex flex-row justify-start w-full py-2 px-3 gap-4 rounded-md hover:bg-gray-100">
                    <MdContentCopy size={18} />
                    <span className="text-sm font-medium">Copy Alamat</span>
                </button>
                <button className="flex flex-row justify-start w-full py-2 px-3 gap-4 rounded-md hover:bg-gray-100">
                    <MdContentCopy size={18} />
                    <span className="text-sm font-medium">Copy Nomor WA</span>
                </button>

                <button className="flex flex-row justify-start w-full py-2 px-3 gap-4 rounded-md hover:bg-gray-100">
                    <IoLogoWhatsapp size={18} />
                    <span className="text-sm font-medium">
                        Hubungi Whatsapp
                    </span>
                </button>
                <button className="flex flex-row justify-start w-full py-2 px-3 gap-4 rounded-md hover:bg-gray-100">
                    <FaPrint size={18} />
                    <span className="text-sm font-medium">Cetak Nota</span>
                </button>
                <button className="flex flex-row justify-start w-full py-2 px-3 gap-4 rounded-md hover:bg-gray-100">
                    <AiOutlineEdit size={18} />
                    <span className="text-sm font-medium">Edit</span>
                </button>
                <button className="flex flex-row justify-start w-full py-2 px-3 gap-4 rounded-md hover:bg-gray-100">
                    <MdDeleteOutline size={18} />
                    <span className="text-sm font-medium">Delete</span>
                </button>
            </div>
        </div>
    );
};

export default ActionModal;
