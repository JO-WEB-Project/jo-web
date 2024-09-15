import React, { useState, useRef, useEffect } from "react";
import { GoBellFill } from "react-icons/go";
import { FaDollarSign, FaUserClock } from "react-icons/fa";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";

const NotificationsOrder = () => {
  return (
    <div className="flex flex-row justify-start min-h-14 items-center w-full py-2 px-3 rounded-md bg-white hover:bg-gray-100 cursor-pointer">
      <div className="w-8 mr-4">
        <FaDollarSign size={25} className="flex justify-center items-center" />
      </div>
      <div className="flex flex-col w-full items-start justify-start">
        <span className="text-xs font-semibold text-green-800">
          Orderan - 08.00
        </span>
        <p className="text-xs font-semibold text-left line-clamp-1">
          Pesanan (produk) masuk senilai (uang masuk) dari (nama)
        </p>
      </div>
    </div>
  );
};

const NotificationsRegister = ({ pendingAdmins = [] }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const handleOpenModal = (admin) => {
    setSelectedAdmin(admin);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAdmin(null);
  };

  const handleApprove = () => {
    if (selectedAdmin) {
      Inertia.post(`/admin/pending-admins/${selectedAdmin.id}/approve`, {}, {
        onSuccess: () => {
          handleCloseModal();
          Inertia.reload({ only: ['pendingAdmins'] });
        },
      });
    }
  };

  const handleReject = () => {
    if (selectedAdmin) {
      Inertia.post(`/admin/pending-admins/${selectedAdmin.id}/reject`, {}, {
        onSuccess: () => {
          handleCloseModal();
          Inertia.reload({ only: ['pendingAdmins'] });
        },
      });
    }
  };

  const formatTime = (dateTime) => {
    const date = new Date(dateTime);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  if (!pendingAdmins || pendingAdmins.length === 0) {
    return null;
  }

  return (
    <>
      {pendingAdmins.map((admin, index) => (
        <button
          key={index}
          onClick={() => handleOpenModal(admin)}
          className="flex flex-row justify-start min-h-14 items-center w-full py-2 px-3 rounded-md hover:bg-gray-100"
        >
          <div className="w-8 mr-4">
            <FaUserClock size={25} className="flex justify-center items-center" />
          </div>
          <div className="flex flex-col w-full items-start justify-start">
            <span className="text-xs font-semibold text-green-800">
              Register - {formatTime(admin.created_at)}
            </span>
            <p className="text-xs font-semibold text-left line-clamp-1">
              Register admin baru menunggu persetujuan - {admin.name}
            </p>
          </div>
        </button>
      ))}

      {showModal && selectedAdmin && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-4 rounded-lg shadow-lg z-10 w-[500px]">
            <p className="font-semibold text-lg mb-2">
              Permintaan Persetujuan Admin Baru
            </p>
            <p className="text-sm text-gray-500 mb-6 pr-4">
              Akun dengan nama {selectedAdmin.name} memakai email {selectedAdmin.email} telah melakukan registrasi sebagai admin. Sebelum menyetujui, pastikan dengan benar bahwa ini merupakan anggota Anda!
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleCloseModal}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleReject}
                className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-md"
              >
                Tolak
              </button>
              <button
                onClick={handleApprove}
                className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-md"
              >
                Setujui
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Notifications = ({ pendingAdmins = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const notificationRef = useRef(null);

  const { auth } = usePage().props;
  const userRole = auth.user.role;

  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationRef]);

  return (
    <div className="relative" ref={notificationRef}>
      <button
        onClick={toggleNotifications}
        className="group p-2 text-gray-600 hover:bg-gray-200 rounded-lg focus:outline-none"
      >
        <GoBellFill size={22} className="group-hover:text-black" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-[400px] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="flex flex-col p-4 pt-1 gap-1 pb-1 border-b border-gray-200">
            <p className="text-md font-semibold">Notifications</p>
          </div>
          <div className="px-1 overflow-scroll h-56 py-1 flex flex-col items-start">
            <NotificationsOrder />

            {userRole === "Owner" && pendingAdmins && (
              <NotificationsRegister pendingAdmins={pendingAdmins} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
