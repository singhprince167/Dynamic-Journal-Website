"use client";
import Link from "next/link";

const ArticleList: React.FC = () => {
  const articles = [
    { id: 1, title: "Article One", author: "John Doe", status: "Draft" },
    { id: 2, title: "Article Two", author: "Jane Smith", status: "Published" },
  ];

  return (
    <div className="w-full h-full">
      {/* ✅ Desktop & Tablet ke liye table */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow p-4 max-w-full">
        <table className="w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-700">ID</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Title</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Author</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Status</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {articles.map((article) => (
              <tr key={article.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 text-black">{article.id}</td>
                <td className="px-4 py-3 text-black">{article.title}</td>
                <td className="px-4 py-3 text-black">{article.author}</td>
                <td className="px-4 py-3 text-black">{article.status}</td>
                <td className="px-4 py-3 text-sm space-x-2">
                  <Link
                    href={`/admin/articles/${article.id}`}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Edit
                  </Link>
                  <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Mobile ke liye Card view */}
      <div className="block md:hidden space-y-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow rounded-lg p-4 space-y-2"
          >
            <p className="text-sm text-gray-600">
              <span className="font-semibold">ID:</span> {article.id}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Title:</span> {article.title}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Author:</span> {article.author}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Status:</span> {article.status}
            </p>
            <div className="flex gap-2 pt-2">
              <Link
                href={`/admin/articles/${article.id}`}
                className="flex-1 text-center px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
              >
                Edit
              </Link>
              <button className="flex-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
