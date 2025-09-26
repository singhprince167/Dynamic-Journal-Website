// Admin dashboard main page
"use client";


export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Welcome to Admin Dashboard
        </h1>

        {/* Example placeholder for future widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600">📑 Total Submissions</p>
            <h2 className="text-xl font-bold text-gray-900">120</h2>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600">👥 Users</p>
            <h2 className="text-xl font-bold text-gray-900">45</h2>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600">📢 Announcements</p>
            <h2 className="text-xl font-bold text-gray-900">8</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
