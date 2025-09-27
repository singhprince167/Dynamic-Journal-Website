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
    <div className="min-h-screen w-full bg-gray-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create / Edit Article
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter article title"
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              className="mt-1 block w-full text-sm sm:text-base"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-2 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Save
            </button>
            <button
              type="button"
              className="w-full sm:w-auto px-5 py-2 bg-gray-200 text-gray-700 text-sm sm:text-base font-medium rounded-lg hover:bg-gray-300 transition"
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
    </div>
  );
};

export default ArticleForm;
