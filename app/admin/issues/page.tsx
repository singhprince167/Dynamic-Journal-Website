// List all issues
"use client";
import Link from "next/link";

const IssuesPage: React.FC = () => {
  const issues = [
    { id: 1, volume: 1, issue: 1, year: 2024, published: true },
    { id: 2, volume: 2, issue: 1, year: 2025, published: false },
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
        <h1 className="text-black font-bold text-lg md:text-xl">Issue Management</h1>
        <Link
          href="/admin/issues/create"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm md:text-base text-center"
        >
          Create New Issue
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-black">
              <th className="p-2 border text-left">Volume</th>
              <th className="p-2 border text-left">Issue</th>
              <th className="p-2 border text-left">Year</th>
              <th className="p-2 border text-left">Published</th>
              <th className="p-2 border text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {issues.map(issue => (
              <tr key={issue.id} className="hover:bg-gray-50">
                <td className="p-2 border text-black">{issue.volume}</td>
                <td className="p-2 border text-black">{issue.issue}</td>
                <td className="p-2 border text-black">{issue.year}</td>
                <td className="p-2 border text-black">{issue.published ? "Yes" : "No"}</td>
                <td className="p-2 border space-x-2 text-black">
                  <Link
                    href={`/admin/issues/${issue.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssuesPage;
