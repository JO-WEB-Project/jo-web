import React from 'react'
import { FaDollarSign } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa6";

const NotificationsModal = () => {
  return (
      <div
          className="block pb-0 mt-3 w-[400px] bg-white border border-gray-200 rounded-lg shadow-lg z-50"
      >
          <div className="flex overflow-hidden flex-col p-4 pt-1 gap-1 pb-1 border-b border-gray-200">
              <p className="text-md font-semibold">Notifications</p>
          </div>
          <div className="px-1 overflow-scroll h-48 py-1 flex flex-col items-start">
              <button className="flex flex-row justify-start h-full items-center w-full py-2 px-3 rounded-md hover:bg-gray-100">
                  <FaDollarSign
                      size={25}
                      className="flex justify-center items-center mr-4"
                  />
                  <div className="flex flex-col items-start justify-start">
                      <span className="text-xs  font-semibold text-green-800">
                          Orderan - 08.00
                      </span>
                      <p className="text-xs font-semibold text-left line-clamp-1">
                          Pesanan papermob + buku masuk dari nama nama nama nama
                          nama nama
                      </p>
                  </div>
              </button>
              <button className="flex flex-row justify-start h-full items-center w-full py-2 px-3 rounded-md hover:bg-gray-100">
                  <FaDollarSign
                      size={25}
                      className="flex justify-center items-center mr-4"
                  />
                  <div className="flex flex-col items-start justify-start">
                      <span className="text-xs  font-semibold text-green-800">
                          Orderan - 08.00
                      </span>
                      <p className="text-xs font-semibold text-left line-clamp-1">
                          Pesanan papermob + buku masuk dari nama nama nama nama
                          nama nama
                      </p>
                  </div>
              </button>
              <button className="flex flex-row justify-start h-full items-center w-full py-2 px-3 rounded-md hover:bg-gray-100">
                  <FaDollarSign
                      size={25}
                      className="flex justify-center items-center mr-4"
                  />
                  <div className="flex flex-col items-start justify-start">
                      <span className="text-xs  font-semibold text-green-800">
                          Orderan - 08.00
                      </span>
                      <p className="text-xs font-semibold text-left line-clamp-1">
                          Pesanan papermob + buku masuk dari nama nama nama nama
                          nama nama
                      </p>
                  </div>
              </button>
              <button className="flex flex-row justify-start h-full items-center w-full py-2 px-3 rounded-md hover:bg-gray-100">
                  <FaUserClock
                      size={25}
                      className="flex justify-center items-center mr-4"
                  />
                  <div className="flex flex-col items-start justify-start">
                      <span className="text-xs  font-semibold text-green-800">
                          Register - 09.00
                      </span>
                      <p className="text-xs font-semibold text-left line-clamp-1">
                          Register admin baru menunggu persetujuan - nama nama
                          nama nama namfdgf ngv
                      </p>
                  </div>
              </button>
              <button className="flex flex-row justify-start h-full items-center w-full py-2 px-3 rounded-md hover:bg-gray-100">
                  <FaUserClock
                      size={25}
                      className="flex justify-center items-center mr-4"
                  />
                  <div className="flex flex-col items-start justify-start">
                      <span className="text-xs  font-semibold text-green-800">
                          Register - 09.00
                      </span>
                      <p className="text-xs font-semibold text-left line-clamp-1">
                          Register admin baru menunggu persetujuan - nama nama
                          nama nama namfdgf ngv
                      </p>
                  </div>
              </button>
              <button className="flex flex-row justify-start h-full items-center w-full py-2 px-3 rounded-md hover:bg-gray-100">
                  <FaUserClock
                      size={25}
                      className="flex justify-center items-center mr-4"
                  />
                  <div className="flex flex-col items-start justify-start">
                      <span className="text-xs  font-semibold text-green-800">
                          Register - 09.00
                      </span>
                      <p className="text-xs font-semibold text-left line-clamp-1">
                          Register admin baru menunggu persetujuan - nama nama
                          nama nama namfdgf ngv
                      </p>
                  </div>
              </button>
              <button className="flex flex-row justify-start h-full items-center w-full py-2 px-3 rounded-md hover:bg-gray-100">
                  <FaUserClock
                      size={25}
                      className="flex justify-center items-center mr-4"
                  />
                  <div className="flex flex-col items-start justify-start">
                      <span className="text-xs  font-semibold text-green-800">
                          Register - 09.00
                      </span>
                      <p className="text-xs font-semibold text-left line-clamp-1">
                          Register admin baru menunggu persetujuan - nama nama
                          nama nama namfdgf ngv
                      </p>
                  </div>
              </button>
              <button className="flex flex-row justify-start h-full items-center w-full py-2 px-3 rounded-md hover:bg-gray-100">
                  <FaUserClock
                      size={25}
                      className="flex justify-center items-center mr-4"
                  />
                  <div className="flex flex-col items-start justify-start">
                      <span className="text-xs  font-semibold text-green-800">
                          Register - 09.00
                      </span>
                      <p className="text-xs font-semibold text-left line-clamp-1">
                          Register admin baru menunggu persetujuan - nama nama
                          nama nama namfdgf ngv
                      </p>
                  </div>
              </button>
          </div>
      </div>
  );
}

export default NotificationsModal
