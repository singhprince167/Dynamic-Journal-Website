// Announcements dashboard page
"use client";

import AnnouncementsForm from "../components/AnnouncementsForm";

export default function AdminAnnouncementsPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Announcements
        </h1>

        {/* Form card */}
        <div className="">
          <AnnouncementsForm />
        </div>
      </main>
    </div>
  );
}
