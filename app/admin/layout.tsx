"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "./components/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Optional: Clear auth token
    // localStorage.removeItem("token");
    router.push("/"); // Redirect to public home page
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-50 border-b">
        <span className="font-bold text-lg">Admin Panel</span>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="px-3 py-2 border rounded bg-gray-200"
        >
          {isSidebarOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Sidebar */}
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 min-h-screen bg-white">
        {/* Top bar with Dashboard & Logout buttons */}
        <div className="flex justify-end mb-4 gap-2">
          {/* Dashboard button now points to /admin */}
          <a
            href="/admin"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            Dashboard
          </a>

          {/* Logout button redirects to public home page */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
          >
            Logout
          </button>
        </div>

        {/* Page content */}
        <div className="bg-white rounded">{children}</div>
      </main>
    </div>
  );
}
