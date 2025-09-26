// Form component for create/edit articles
"use client";
import { useState } from "react";

const ArticleForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Draft");
  const [pdf, setPdf] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, author, status, pdf });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Create / Edit Article
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter article title"
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name"
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>Draft</option>
            <option>Published</option>
          </select>
        </div>

        {/* Upload PDF */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload PDF</label>
          <input
            type="file"
            onChange={(e) => setPdf(e.target.files ? e.target.files[0] : null)}
            className="mt-1 block text-sm"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
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
              setTitle("");
              setAuthor("");
              setStatus("Draft");
              setPdf(null);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
