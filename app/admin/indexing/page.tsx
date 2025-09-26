// pages/admin/indexing.tsx
"use client";

import IndexingMetricsForm from "../components/IndexingMetricsForm";

export default function AdminIndexingPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      

      {/* Main content */}
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-3xl mx-auto">
          {/* Page Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Indexing & Metrics
          </h1>

          {/* Form Card */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <IndexingMetricsForm />
          </div>
        </div>
      </main>
    </div>
  );
}
