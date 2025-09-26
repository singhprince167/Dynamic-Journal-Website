type User = {
  id: number;
  name: string;
  email: string;
  role: "Author" | "Editor" | "Reviewer" | "Admin";
};

type UsersTableProps = {
  users?: User[];
  handleRoleChange?: (id: number, role: User["role"]) => void;
};

const UsersTable: React.FC<UsersTableProps> = ({ users = [], handleRoleChange }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg text-sm">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-4 py-3 text-left">ID</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Role</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {users.map((user) => (
            <tr key={user.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap">{user.id}</td>
              <td className="px-4 py-2 whitespace-nowrap">{user.name}</td>
              <td className="px-4 py-2 whitespace-nowrap">{user.email}</td>
              <td className="px-4 py-2">
                <select
                  className="border rounded px-2 py-1 text-sm focus:ring-1 focus:ring-blue-300 w-full"
                  value={user.role}
                  onChange={(e) =>
                    handleRoleChange &&
                    handleRoleChange(user.id, e.target.value as User["role"])
                  }
                >
                  <option value="Author">Author</option>
                  <option value="Editor">Editor</option>
                  <option value="Reviewer">Reviewer</option>
                  <option value="Admin">Admin</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
