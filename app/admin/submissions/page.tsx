// Submission Dashboard
"use client";



import SubmissionTable from "../components/SubmissionTable";

export default function AdminSubmissionsPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Submissions Dashboard
        </h1>
        <div className="">
          <SubmissionTable />
        </div>
      </main>
    </div>
  );
}
