import React from "react";

const DetailModal = ({ data, modalRef, modalPosition }) => {
    return (
        <div
            ref={modalRef}
            style={{ top: modalPosition.top, left: modalPosition.left }}
            className="absolute pb-4 mt-3 -translate-x-60 w-[500px] bg-white border border-gray-200 rounded-lg shadow-lg z-50"
        >
            <div className="flex flex-col p-4 pt-2 gap-1 pb-2 font-bold border-b border-gray-200">
                <p className="text-lg font-semibold line-clamp-1">
                    {data.Nama}
                </p>
                <p className="text-sm font-medium">
                    {data.fakultas}
                    <span className="mx-4">-</span>
                    <span className="text-green-800">{data.orderCode}</span>
                </p>
            </div>
            <ul className="pt-2 grid grid-cols-9 px-4">
                <li className="col-span-3 pr-2 flex justify-between items-start hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-semibold">Product</p>
                    <span className="text-sm font-semibold">:</span>
                </li>
                <li className="col-span-6 flex justify-start items-start hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-medium">
                        {data.orderan[0].namaBarang}
                        <span className="ml-2 text-sm text-green-800">
                            {data.orderan[0].jumlah}
                        </span>
                    </p>
                </li>
            </ul>
            <ul className="pt-2 grid grid-cols-9 px-4">
                <li className="col-span-3 pr-2 flex justify-between items-start hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-semibold">Harga</p>
                    <span className="text-sm font-semibold">:</span>
                </li>
                <li className="col-span-6 flex justify-start items-start hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-medium">{data.totalHarga}</p>
                </li>
            </ul>
            <ul className="pt-2 grid grid-cols-9 px-4">
                <li className="col-span-3 pr-2 flex justify-between items-start hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-semibold">Nomor (WA)</p>
                    <span className="text-sm font-semibold">:</span>
                </li>
                <li className="col-span-6 flex justify-start items-start hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-medium">{data.waNumber}</p>
                </li>
            </ul>
            <ul className="pt-2 grid grid-cols-9 px-4">
                <li className="col-span-3 pr-2 flex justify-between items-start hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-semibold">Alamat</p>
                    <span className="text-sm font-semibold">:</span>
                </li>
                <li className="col-span-6 flex justify-start items-start hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-medium">{data.alamat}</p>
                </li>
            </ul>
            <ul className="pt-2 grid grid-cols-9 px-4">
                <li className="col-span-3 pr-2 flex justify-between items-start hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-semibold">Catatan</p>
                    <span className="text-sm font-semibold">:</span>
                </li>
                <li className="col-span-6 flex justify-start items-start hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-medium">{data.catatan}</p>
                </li>
            </ul>
            <ul className="pt-2 grid grid-cols-9 px-4">
                <li className="col-span-3 pr-2 flex justify-between items-start hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-semibold">Pengiriman</p>
                    <span className="text-sm font-semibold">:</span>
                </li>
                <li className="col-span-6 flex justify-start items-start hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-medium">{data.pengiriman}</p>
                </li>
            </ul>
            <ul className="pt-2 grid grid-cols-9 px-4">
                <li className="col-span-3 pr-2 flex justify-between items-start hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-semibold">Pembayaran</p>
                    <span className="text-sm font-semibold">:</span>
                </li>
                <li className="col-span-6 flex justify-start items-start hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-medium">{data.pembayaran}</p>
                </li>
            </ul>
            <ul className="pt-2 grid grid-cols-9 px-4">
                <li className="col-span-3 pr-2 flex justify-between items-start hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-semibold">Status</p>
                    <span className="text-sm font-semibold">:</span>
                </li>
                <li className="col-span-6 flex justify-start items-start hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-medium">{data.status}</p>
                </li>
            </ul>
        </div>
    );
};

export default DetailModal;
