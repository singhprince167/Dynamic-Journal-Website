"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    {
      label: "Current Issue & Archives",
      href: "/issues",
      details: (
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-indigo-700 mb-2 text-base">
              Latest Issues
            </h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><Link href="/issues/1">Volume 1 - 2024</Link></li>
              <li><Link href="/issues/2">Volume 2 - 2025</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-indigo-700 mb-2 text-base">
              Archives
            </h3>
            <p className="text-sm text-gray-600">Browse all previous volumes and issues.</p>
          </div>
        </div>
      ),
    },
    {
      label: "Editorial Board",
      href: "/editorial-board",
      details: (
        <div>
          <h3 className="font-bold text-indigo-700 mb-2 text-base">
            Our Editorial Team
          </h3>
          <p className="text-sm text-gray-600">
            Meet our Editor-in-Chief, Associate Editors, and Review Board.
          </p>
        </div>
      ),
    },
    {
      label: "Author Guidelines",
      href: "/author-guidelines",
      details: (
        <div>
          <h3 className="font-bold text-indigo-700 mb-2 text-base">
            For Authors
          </h3>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Submission Guidelines</li>
            <li>Formatting Instructions</li>
            <li>Copyright & Ethics</li>
          </ul>
        </div>
      ),
    },
    {
      label: "Peer Review & Policies",
      href: "/peer-review",
      details: (
        <div>
          <h3 className="font-bold text-indigo-700 mb-2 text-base">
            Policies
          </h3>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Double-blind Peer Review</li>
            <li>Plagiarism Policy</li>
            <li>Ethical Standards</li>
          </ul>
        </div>
      ),
    },
    { label: "Indexing & Metrics", href: "/indexing" },
    { label: "Announcements", href: "/announcements" },
    { label: "Submission System", href: "/submission" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            MyJournal
          </Link>
        </div>

        {/* Desktop Center Menu */}
        <div className="flex-1 flex justify-center relative">
          <nav className="hidden md:flex space-x-5">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800 text-sm  transition duration-200"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Full-width dropdown */}
          {activeMenu && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-200 py-6 px-8 z-40">
              {
                menuItems.find((item) => item.label === activeMenu)?.details ?? (
                  <p className="text-sm text-gray-600">No extra details available.</p>
                )
              }
            </div>
          )}
        </div>

        {/* Admin/Login Button */}
        <div className="hidden md:block">
          <Link
            href="/login"
            className="mt-2 px-4 py-2 border border-gray-700 text-gray-700 rounded hover:bg-gray-100 transition duration-200 text-sm text-center"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none px-3 py-2 border rounded hover:bg-gray-100 transition duration-200"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg w-full relative z-40">
          <div className="px-4 pt-4 pb-4 flex flex-col divide-y divide-gray-300">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="py-2 text-gray-600 hover:text-gray-800 text-sm transition duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="mt-2 px-4 py-2 border border-gray-700 text-gray-700 rounded hover:bg-gray-100 transition duration-200 text-sm text-center"
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
