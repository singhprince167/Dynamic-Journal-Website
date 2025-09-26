"use client";
import { useState } from "react";
import Link from "next/link";
import AuthorGuidelinesDetails from "../app/author-guidelines/AuthorGuidelinesDetails";
import PeerReviewDetails from "@/components/PeerReviewDetails";
import IndexingDetails from "@/components/IndexingDetails";
import AnnouncementsDetails from "@/components/AnnouncementsDetails";
import SubmissionSystemDetails from "@/components/SubmissionSystemDetails";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);

  const menuItems = [
    { label: "Current Issue & Archives", href: "/issues", details: 
      <div>
          <h3 className="font-bold text-indigo-700 mb-2 text-sm">Browse Issues</h3>
          <p className="text-xs text-gray-600">
            View current issue contents and explore historical archives.
          </p>
        </div>
     },
    { 
      label: "Editorial Board", 
      href: "/editorial-board", 
      details: (
        <div>
          <h3 className="font-bold text-indigo-700 mb-2 text-sm">Our Editorial Team</h3>
          <p className="text-xs text-gray-600">Meet our Editor-in-Chief, Associate Editors, and Review Board.</p>
        </div>
      )
    },
    { label: "Author Guidelines", href: "/author-guidelines", details: <AuthorGuidelinesDetails /> },
    { label: "Peer Review & Policies", href: "/peer-review", details: <PeerReviewDetails /> },
    { label: "Indexing & Metrics", href: "/indexing", details: <IndexingDetails /> },
    { label: "Announcements", href: "/announcements", details: <AnnouncementsDetails /> },
    { label: "Submission System", href: "/submission", details: <SubmissionSystemDetails /> },
    { label: "Contact", href: "/contact", details: null },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 mr-8">
          <Link href="/" className="text-2xl font-bold text-gray-800">MyJournal</Link>
        </div>

        {/* Desktop Center Menu */}
        <div className="flex-1 flex justify-center relative">
          <nav className="hidden md:flex space-x-5">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => { if (!isHoveringDropdown) setActiveMenu(null); }}
              >
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800 text-xs md:text-[11px] font-bold transition duration-200"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Full-width dropdown */}
          {activeMenu && menuItems.find(item => item.label === activeMenu)?.details && (
            <div
              className="absolute left-1/2 transform -translate-x-1/2 top-11 min-w-max w-full bg-white shadow-lg border-t border-gray-200 py-6 px-8 z-40"
              onMouseEnter={() => setIsHoveringDropdown(true)}
              onMouseLeave={() => { setIsHoveringDropdown(false); setActiveMenu(null); }}
            >
              {menuItems.find(item => item.label === activeMenu)?.details}
            </div>
          )}
        </div>

        {/* Admin/Login Button */}
        <div className="hidden md:block ml-8">
          <Link
            href="/admin"
            className="mt-2 px-4 py-2 border border-gray-700 text-gray-700 rounded hover:bg-gray-100 transition duration-200 text-xs text-center"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-gray-700 focus:outline-none px-3 py-2 border rounded transition duration-200
              ${isOpen ? "bg-gray-200 border-gray-500" : "bg-white border-gray-300"}`}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg w-full transition-all duration-300">
          <div className="px-4 pt-4 pb-4 flex flex-col divide-y divide-gray-300">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="py-3 block text-gray-700 hover:text-gray-900 text-sm font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className="mt-2 px-4 py-2 border border-gray-700 text-gray-700 rounded hover:bg-gray-100 transition duration-200 text-sm text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
