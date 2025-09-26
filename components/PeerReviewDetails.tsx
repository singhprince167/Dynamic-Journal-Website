"use client";
import React from "react";
import Link from "next/link";

const PeerReviewDetails: React.FC = () => {
  return (
    <div className="max-w-md">
      <h3 className="font-bold text-indigo-700 mb-2 text-sm">Function</h3>
      <p className="text-xs text-gray-600 mb-3">
        Publicly declare how submissions are reviewed and policies (ethics,
        copyright, retraction).
      </p>

      <h3 className="font-bold text-indigo-700 mb-2 text-sm">Admin options</h3>
      <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1 mb-3">
        <li>Edit peer-review model (single / double / blind)</li>
        <li>Review timeline descriptions</li>
        <li>Sample review form</li>
        <li>
          Publish copyright/licensing (e.g., <code>CC BY 4.0</code>) and
          retraction policy
        </li>
      </ul>

      <div className="mt-3">
        <Link
          href="/peer-review"
          className="text-indigo-600 hover:underline text-xs"
        >
          Read full policies →
        </Link>
      </div>
    </div>
  );
};

export default PeerReviewDetails;
