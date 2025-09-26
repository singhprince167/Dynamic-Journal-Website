type Revision = {
  id: number;
  title: string;
  lastEdited: string;
  editor: string;
  status: string;
};

interface StaticPagesTableProps {
  revisions: Revision[];
}

const StaticPagesTable: React.FC<StaticPagesTableProps> = ({ revisions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 text-sm text-black">
        <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
          <tr>
            <th className="px-3 py-2 text-left">ID</th>
            <th className="px-3 py-2 text-left">Title</th>
            <th className="px-3 py-2 text-left">Last Edited</th>
            <th className="px-3 py-2 text-left">Editor</th>
            <th className="px-3 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {revisions.map((rev) => (
            <tr key={rev.id} className="border-t border-gray-200 hover:bg-gray-50">
              <td className="px-3 py-2 whitespace-nowrap">{rev.id}</td>
              <td className="px-3 py-2">{rev.title}</td>
              <td className="px-3 py-2">{rev.lastEdited}</td>
              <td className="px-3 py-2">{rev.editor}</td>
              <td className="px-3 py-2">{rev.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaticPagesTable;
