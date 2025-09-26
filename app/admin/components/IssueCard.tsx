"use client";
import Link from "next/link";

interface IssueCardProps {
  id: number;
  volume: number;
  issue: number;
  month: string;
  year: number;
  articlesCount: number;
  status: string;
}

const IssueCard: React.FC<IssueCardProps> = ({
  id,
  volume,
  issue,
  month,
  year,
  articlesCount,
  status,
}) => {
  return (
    <div className="border p-4 rounded shadow-sm bg-white mb-4 flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="mb-2 md:mb-0">
        <h3 className="font-bold text-sm md:text-base">
          Volume {volume}, Issue {issue}
        </h3>
        <p className="text-xs md:text-sm">
          {month} {year} | Articles: {articlesCount}
        </p>
        <p className="text-xs md:text-sm">
          Status:{" "}
          <span
            className={
              status === "Published" ? "text-green-600 font-medium" : "text-gray-500"
            }
          >
            {status}
          </span>
        </p>
      </div>
      <Link
        href={`/admin/issues/${id}`}
        className="px-3 py-1 bg-blue-600 text-white rounded text-xs md:text-sm text-center md:ml-4"
      >
        Edit
      </Link>
    </div>
  );
};

export default IssueCard;
