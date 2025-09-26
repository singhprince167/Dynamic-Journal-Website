"use client";

import React, { useState, useEffect } from "react";
import AdminSidebar from "../../components/AdminSidebar"; // adjust path if needed
import { useParams } from "next/navigation";

const EditIssuePage: React.FC = () => {
  const params = useParams(); // Next.js 15.5.3 style
  const issueId = params.id; // id from URL
  const [issueData, setIssueData] = useState({
    volume: "",
    issueNumber: "",
    publicationDate: "",
    articles: [{ title: "", author: "" }],
  });

  useEffect(() => {
    // Dummy fetch for UI
    const fetchIssue = async () => {
      // Replace this with real API later
      setIssueData({
        volume: "1",
        issueNumber: "2024-01",
        publicationDate: "2024-09-25",
        articles: [
          { title: "Sample Article 1", author: "Author A" },
          { title: "Sample Article 2", author: "Author B" },
        ],
      });
    };
    fetchIssue();
  }, [issueId]);

  const handleArticleChange = (index: number, field: string, value: string) => {
    const updatedArticles = [...issueData.articles];
    updatedArticles[index] = { ...updatedArticles[index], [field]: value };
    setIssueData({ ...issueData, articles: updatedArticles });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Issue saved", issueData);
    // Future: integrate backend API
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Edit Issue: {issueId}</h1>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Volume</label>
              <input
                type="text"
                value={issueData.volume}
                onChange={(e) => setIssueData({ ...issueData, volume: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Issue Number</label>
              <input
                type="text"
                value={issueData.issueNumber}
                onChange={(e) => setIssueData({ ...issueData, issueNumber: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Publication Date</label>
              <input
                type="date"
                value={issueData.publicationDate}
                onChange={(e) => setIssueData({ ...issueData, publicationDate: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-sm"
              />
            </div>
          </div>

          {/* Responsive Articles Section */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Articles</h2>
            {issueData.articles.map((article, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Title"
                  value={article.title}
                  onChange={(e) => handleArticleChange(idx, "title", e.target.value)}
                  className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm w-full"
                />
                <input
                  type="text"
                  placeholder="Author"
                  value={article.author}
                  onChange={(e) => handleArticleChange(idx, "author", e.target.value)}
                  className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm w-full"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => console.log("Cancel")}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default EditIssuePage;
