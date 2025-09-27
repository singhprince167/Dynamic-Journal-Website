"use client";
import Link from "next/link";

const EditorialBoardList: React.FC = () => {
  const members = [
    { id: 1, name: "Dr. John Doe", role: "Editor-in-Chief", email: "john@example.com" },
    { id: 2, name: "Dr. Jane Smith", role: "Associate Editor", email: "jane@example.com" },
    { id: 3, name: "Dr. Alice Brown", role: "Managing Editor", email: "alice@example.com" },
  ];

  return (
    <div className="w-full bg-gray-100 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-md p-5 sm:p-6 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{member.name}</h3>
            <p className="text-gray-600 text-xs sm:text-sm">{member.role}</p>
            <p className="text-gray-500 text-xs sm:text-sm">{member.email}</p>

            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href={`/admin/editorial-board/${member.id}`}
                className="px-3 py-1 bg-blue-600 text-white text-xs sm:text-sm rounded hover:bg-blue-700 transition"
              >
                Edit
              </Link>
              <button className="px-3 py-1 bg-red-600 text-white text-xs sm:text-sm rounded hover:bg-red-700 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorialBoardList;
