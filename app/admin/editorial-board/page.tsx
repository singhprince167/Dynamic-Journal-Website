// List of editorial board members
"use client";

import EditorialBoardList from "../components/EditorialBoardList";

export default function AdminEditorialBoardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      

      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Editorial Board
          </h1>

          {/* Members list */}
          <div className="space-y-4">
            <EditorialBoardList />
          </div>
        </div>
      </main>
    </div>
  );
}
