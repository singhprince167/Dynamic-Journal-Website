"use client";
import Link from "next/link";

const issues = [
  { id: "1", volume: 12, issueNumber: 3, monthYear: "Oct 2025" },
  { id: "2", volume: 12, issueNumber: 2, monthYear: "Jul 2025" },
  { id: "3", volume: 12, issueNumber: 1, monthYear: "Apr 2025" },
];

const IssuesPage = () => {
  return (
    <main className="bg-white min-h-screen  mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-10">Current Issue & Archives</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {issues.map((issue) => (
          <Link key={issue.id} href={`/issues/${issue.id}`} className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                Volume {issue.volume}, Issue {issue.issueNumber}
              </h2>
              <p className="text-gray-600">{issue.monthYear}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default IssuesPage;
