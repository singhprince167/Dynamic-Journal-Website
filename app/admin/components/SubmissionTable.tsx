// Table to list submissions
"use client";

const dummySubmissions = [
  { id: 1, author: "John Doe", title: "Paper 1", status: "Pending", date: "2025-09-25" },
  { id: 2, author: "Jane Smith", title: "Paper 2", status: "Accepted", date: "2025-09-20" },
  { id: 3, author: "Bob Johnson", title: "Paper 3", status: "Rejected", date: "2025-09-15" },
];

const SubmissionTable: React.FC = () => {
  return (
    <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-gray-200 text-black">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">ID</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Author</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Title</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {dummySubmissions.map((sub) => (
            <tr key={sub.id} className="hover:bg-gray-50 transition">
              <td className="px-4 py-3">{sub.id}</td>
              <td className="px-4 py-3">{sub.author}</td>
              <td className="px-4 py-3">{sub.title}</td>
              <td
                className={`px-4 py-3 font-medium ${
                  sub.status === "Accepted"
                    ? "text-green-600"
                    : sub.status === "Rejected"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {sub.status}
              </td>
              <td className="px-4 py-3">{sub.date}</td>
              <td className="px-4 py-3 space-x-2">
                <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                  View
                </button>
                <button className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionTable;
