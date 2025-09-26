// Table component for listing articles (better readability)
"use client";
import Link from "next/link";

const ArticleList: React.FC = () => {
  const articles = [
    { id: 1, title: "Article One", author: "John Doe", status: "Draft" },
    { id: 2, title: "Article Two", author: "Jane Smith", status: "Published" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">ID</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Title</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Author</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {articles.map((article) => (
            <tr key={article.id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-3 text-black">{article.id}</td>
              <td className="px-6 py-3 text-black">{article.title}</td>
              <td className="px-6 py-3 text-black">{article.author}</td>
              <td className="px-6 py-3 text-black">{article.status}</td>
              <td className="px-6 py-3 text-sm space-x-2">
                <Link
                  href={`/admin/articles/${article.id}`}
                  className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
                >
                  Edit
                </Link>
                <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleList;
