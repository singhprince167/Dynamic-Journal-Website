"use client";
import IssueCard from "./IssueCard";

interface Issue {
  id: number;
  volume: number;
  issue: number;
  month: string;
  year: number;
  articlesCount: number;
  status: string;
}

interface IssuesTableProps {
  issues: Issue[];
}

const IssuesTable: React.FC<IssuesTableProps> = ({ issues }) => {
  return (
    <div className="space-y-4">
      {issues.map((issue) => (
        <IssueCard key={issue.id} {...issue} />
      ))}
    </div>
  );
};

export default IssuesTable;
