import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/react";

const EditModal = ({ isOpen, onClose, onSave, admin, errors }) => {
  const [formData, setFormData] = useState({
    name: admin.name || "",
    username: admin.username || "",
    email: admin.email || "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-96">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Role</label>
            <input
              type="text"
              name="role"
              value={admin.role}
              disabled
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
        </form>
        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(formData)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-96">
        <h2 className="text-xl font-semibold mb-4">Delete Confirmation</h2>
        <p className="text-sm text-gray-500 mb-6">
          Are you sure you want to delete this admin? This action cannot be
          undone.
        </p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const ListAdmin = ({ admin, index }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const handleEditClick = () => {
    setEditModalOpen(true);
    setErrors({});
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setErrors({});
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleSaveChanges = (data) => {
    Inertia.post(`/admin/admins/${admin.id}/update`, data, {
      onSuccess: () => {
        setEditModalOpen(false);
        setErrors({});
      },
      onError: (errors) => {
        setErrors(errors);
      },
    });
  };

  const handleDeleteAdmin = () => {
    Inertia.post(`/admin/admins/${admin.id}/delete`, {}, {
      onSuccess: () => {
        setDeleteModalOpen(false);
      },
    });
  };

  return (
    <div className="mb-2 hover:bg-slate-100 bg-white shadow-md w-auto grid grid-cols-12 gap-2 rounded-lg border-[0.1px] border-black border-opacity-60 justify-center items-center">
      <div className="flex col-span-1 text-sm border-r border-black border-opacity-10 w-auto h-full px-4 py-2 font-bold flex-col justify-center items-center">
        {index}
      </div>
      <div className="flex col-span-3 border-r border-black border-opacity-10 w-auto h-full px-4 py-2 font-medium text-sm flex-col justify-center items-start line-clamp-1">
        {admin.name}
      </div>
      <div className="flex col-span-2 border-r border-black border-opacity-10 w-auto h-full px-4 py-2 font-medium text-sm flex-col justify-center items-center">
        {admin.username}
      </div>
      <div className="flex col-span-2 border-r border-black border-opacity-10 w-auto h-full px-4 py-2 font-medium text-sm flex-col justify-center items-center">
        {admin.email}
      </div>
      <div className="flex col-span-2 border-r border-black border-opacity-10 w-auto h-full px-4 py-2 font-medium text-sm flex-col justify-center items-center">
        {admin.role}
      </div>
      <div className="flex flex-row col-span-2 gap-4 border-black border-opacity-10 w-auto h-full px-2 py-2 font-medium text-sm justify-center items-center">
        <button
          onClick={handleEditClick}
          className="flex flex-row justify-center rounded-lg items-center w-auto hover:bg-gray-200 p-2"
        >
          <FaUserEdit size={20} />
        </button>
        <button
          onClick={handleDeleteClick}
          className="flex flex-row justify-center rounded-lg items-center w-auto hover:bg-gray-200 p-2"
        >
          <MdDelete size={20} />
        </button>
      </div>

      <EditModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        onSave={handleSaveChanges}
        admin={admin}
        errors={errors}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onDelete={handleDeleteAdmin}
      />
    </div>
  );
};

export default ListAdmin;
