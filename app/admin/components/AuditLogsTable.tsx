"use client";
import React from "react";

type Log = {
  id: number;
  action: string;
  user: string;
  timestamp: string;
  details: string;
};

interface AuditLogsTableProps {
  logs: Log[];
}

const AuditLogsTable: React.FC<AuditLogsTableProps> = ({ logs }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-black border border-gray-200 rounded-lg text-sm">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-4 py-3 text-left">ID</th>
            <th className="px-4 py-3 text-left">Action</th>
            <th className="px-4 py-3 text-left">User</th>
            <th className="px-4 py-3 text-left">Timestamp</th>
            <th className="px-4 py-3 text-left">Details</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {logs.map((log) => (
            <tr key={log.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{log.id}</td>
              <td className="px-4 py-2">{log.action}</td>
              <td className="px-4 py-2">{log.user}</td>
              <td className="px-4 py-2">{log.timestamp}</td>
              <td className="px-4 py-2">{log.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLogsTable;
