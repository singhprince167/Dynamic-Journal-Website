"use client";
import React from "react";
import AuditLogsTable from "../components/AuditLogsTable";

const dummyLogs = [
  { id: 1, action: "Edited Issue", user: "Admin", timestamp: "2025-09-25 10:30", details: "Changed issue title" },
  { id: 2, action: "Role Updated", user: "Editor", timestamp: "2025-09-24 15:10", details: "User Jane role changed to Reviewer" },
  { id: 3, action: "Published Article", user: "Admin", timestamp: "2025-09-23 18:45", details: "Article on AI published" },
];

export default function AuditLogsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-6">Audit Logs</h1>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md overflow-x-auto">
          <AuditLogsTable logs={dummyLogs} />
        </div>
      </div>
    </main>
  );
}
