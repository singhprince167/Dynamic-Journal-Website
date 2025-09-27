"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AdminSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  const links = [
    { href: "/admin/issues", label: "Issue Management" },
    { href: "/admin/articles", label: "Article CRUD" },
    { href: "/admin/editorial-board", label: "Editorial Board" },
    { href: "/admin/indexing", label: "Indexing & Metrics" },
    { href: "/admin/announcements", label: "Announcements" },
    { href: "/admin/submissions", label: "Submissions" },
    { href: "/admin/users", label: "Users & Roles" },
    { href: "/admin/static-pages", label: "Static Pages" },
    { href: "/admin/reports", label: "Reports & Exports" },
    { href: "/admin/audit-logs", label: "Audit Logs" },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-white text-gray-800 border-r-2 border-black p-6
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex-shrink-0
          z-40
        `}
      >
        <h2 className="font-bold text-xl mb-6">Admin Panel</h2>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition
                  ${pathname === link.href ? "bg-blue-600 text-white" : "hover:bg-gray-100"}
                `}
                onClick={() => setIsOpen(false)} // Close sidebar on mobile after clicking
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default AdminSidebar;
