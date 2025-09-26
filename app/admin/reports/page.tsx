// Reports & Exports page
"use client";
import React from "react";
import ReportsTable from "../components/ReportsTable";

const dummyReports = [
  { id: 1, title: "Article on AI", author: "Author1", submittedDate: "2025-09-20", status: "Published" },
  { id: 2, title: "Study on ML", author: "Author2", submittedDate: "2025-09-21", status: "Pending" },
  { id: 3, title: "Blockchain Research", author: "Author3", submittedDate: "2025-09-22", status: "Draft" },
];

export default function ReportsAdmin() {
  const handleExportCSV = () => {
    alert("CSV Export clicked (dummy action)");
  };

  const handleExportXML = () => {
    alert("XML Export clicked (dummy action)");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-6">Reports & Exports</h1>

        {/* Export Buttons */}
        <div className="mb-4 flex flex-wrap gap-2">
          <button
            onClick={handleExportCSV}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Export CSV
          </button>
          <button
            onClick={handleExportXML}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          >
            Export XML
          </button>
        </div>

        {/* Table */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md overflow-x-auto">
          <ReportsTable reports={dummyReports} />
        </div>
      </div>
    </main>
  );
}
