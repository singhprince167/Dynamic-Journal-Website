"use client";
import React from "react";
import Link from "next/link";

const IndexingDetails: React.FC = () => {
  return (
    <div className="max-w-md">
      <h3 className="font-bold text-indigo-700 mb-2 text-sm">Function</h3>
      <p className="text-xs text-gray-600 mb-3">
        Display where the journal is indexed and how impact metrics are
        calculated.
      </p>

      <h3 className="font-bold text-indigo-700 mb-2 text-sm">Admin options</h3>
      <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1 mb-3">
        <li>Update indexing databases (Scopus, DOAJ, PubMed, etc.)</li>
        <li>Upload/update Impact Factor and citation metrics</li>
        <li>Provide links to indexing portals</li>
      </ul>

      <div className="mt-3">
        <Link
          href="/indexing"
          className="text-indigo-600 hover:underline text-xs"
        >
          View all indexing & metrics →
        </Link>
      </div>
    </div>
  );
};

export default IndexingDetails;
