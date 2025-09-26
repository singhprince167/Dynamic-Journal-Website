"use client";
import React from "react";
import Link from "next/link";

const AnnouncementsDetails: React.FC = () => {
  return (
    <div className="max-w-md">
      <h3 className="font-bold text-indigo-700 mb-2 text-sm">Function</h3>
      <p className="text-xs text-gray-600 mb-3">
        Publish journal updates, conference calls, or new policy notices.
      </p>

      <h3 className="font-bold text-indigo-700 mb-2 text-sm">Admin options</h3>
      <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1 mb-3">
        <li>Post new announcements with rich-text editor</li>
        <li>Pin urgent notices at the top</li>
        <li>Archive older announcements</li>
      </ul>

      <div className="mt-3">
        <Link
          href="/announcements"
          className="text-indigo-600 hover:underline text-xs"
        >
          View all announcements →
        </Link>
      </div>
    </div>
  );
};

export default AnnouncementsDetails;
