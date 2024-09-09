import React from 'react'

const HeadListAllOrder = () => {
  return (
      <div className="mb-4 bg-gray-100 shadow-md w-auto grid grid-cols-12 gap-2 rounded-lg border-[0.1px] border-black border-opacity-60 justify-center items-center">
          <div className="flex col-span-1 border-r border-black border-opacity-10 w-auto px-4 py-4 font-bold flex-col justify-center items-center">
              No
          </div>
          <div className="flex col-span-3 border-r border-black border-opacity-10 w-auto px-4 py-4 font-bold flex-col justify-center items-center">
              Nama
          </div>
          <div className="flex col-span-2 border-r border-black border-opacity-10 w-auto px-4 py-4 font-bold flex-col justify-center items-center">
              Kode Pesanan
          </div>
          <div className="flex col-span-2 border-r border-black border-opacity-10 w-auto px-4 py-4 font-bold flex-col justify-center items-center">
             Status
          </div>
          <div className="flex col-span-2 border-r border-black border-opacity-10 w-auto px-4 py-4 font-bold flex-col justify-center items-center">
              Detail
          </div>
          <div className="flex col-span-2 border-black border-opacity-10 w-auto px-4 py-4 font-bold flex-col justify-center items-center">
              Action
          </div>
      </div>
  );
}

export default HeadListAllOrder
