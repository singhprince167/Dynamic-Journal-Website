// app/admin/users/page.tsx
"use client";

import UsersTable from "../components/UsersTable";

const dummyUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Author" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Reviewer" },
  { id: 4, name: "Bob Brown", email: "bob@example.com", role: "Admin" },
];

export default function AdminUsersPage() {
  const handleRoleChange = (id: number, role: string) => {
    console.log(`User ${id} role changed to ${role}`);
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Users & Roles
        </h1>

        {/* Table Card */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 overflow-x-auto">
          <UsersTable users={dummyUsers} handleRoleChange={handleRoleChange} />
        </div>
      </div>
    </main>
  );
}
