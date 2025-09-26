"use client";
import React, { useState } from "react";
import StaticPagesTable from "@/app/admin/components/StaticPagesTable";

const dummyRevisions = [
  { id: 1, title: "About Us", lastEdited: "2025-09-25", editor: "Admin", status: "Published" },
  { id: 2, title: "Privacy Policy", lastEdited: "2025-09-20", editor: "Editor", status: "Draft" },
];

export default function StaticPagesAdmin() {
  const [content, setContent] = useState("");

  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Static Pages Management
        </h1>

        {/* Editor Section */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            Edit Page Content
          </h2>
          <textarea
            className="w-full h-64 border border-gray-300 rounded p-2 text-black resize-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Edit your page content here..."
          />
          <div className="mt-2 flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Publish
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition">
              Unpublish
            </button>
          </div>
        </div>

        {/* Revision History */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            Revision History
          </h2>
          <div className="bg-white rounded-lg shadow-md p-4 overflow-x-auto">
            <StaticPagesTable revisions={dummyRevisions} />
          </div>
        </div>
      </div>
    </main>
  );
}
