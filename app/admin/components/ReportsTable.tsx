// Table showing submissions/articles
type Report = {
  id: number;
  title: string;
  author: string;
  submittedDate: string;
  status: string;
};

interface ReportsTableProps {
  reports: Report[];
}

const ReportsTable: React.FC<ReportsTableProps> = ({ reports }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-black border border-gray-200 min-w-[600px]">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-3 py-2 text-left">ID</th>
            <th className="px-3 py-2 text-left">Title</th>
            <th className="px-3 py-2 text-left">Author</th>
            <th className="px-3 py-2 text-left">Submitted Date</th>
            <th className="px-3 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((rep) => (
            <tr key={rep.id} className="border-t border-gray-200 hover:bg-gray-50">
              <td className="px-3 py-2">{rep.id}</td>
              <td className="px-3 py-2">{rep.title}</td>
              <td className="px-3 py-2">{rep.author}</td>
              <td className="px-3 py-2">{rep.submittedDate}</td>
              <td className="px-3 py-2">{rep.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsTable;
