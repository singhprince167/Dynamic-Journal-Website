// components/EditorialBoardForm.tsx
"use client";
import { useState } from "react";

const EditorialBoardForm: React.FC = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, role, email, photo });
    // TODO: Replace with actual API call
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
        Add / Edit Editorial Board Member
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter member name"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Enter role"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Photo */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Photo</label>
            <input
              type="file"
              onChange={(e) => setPhoto(e.target.files ? e.target.files[0] : null)}
              className="mt-1 block text-sm"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
          >
            Save
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-300 transition"
            onClick={() => {
              setName("");
              setRole("");
              setEmail("");
              setPhoto(null);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditorialBoardForm;
