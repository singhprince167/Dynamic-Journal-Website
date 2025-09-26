// Edit/View individual member
"use client";
import AdminSidebar from "../../components/AdminSidebar";
import EditorialBoardForm from "../../components/EditorialBoardForm";

interface Props {
  params: { id: string };
}

export default function EditMemberPage({ params }: Props) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r shadow-sm">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-2xl mx-auto">
          {/* Page Heading */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Edit Member #{params.id}
          </h1>

          {/* Form Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <EditorialBoardForm />
          </div>
        </div>
      </main>
    </div>
  );
}
