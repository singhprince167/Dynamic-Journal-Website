"use client";

const CreateIssuePage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Create New Issue</h1>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Volume</label>
            <input type="number" className="border p-2 w-full rounded text-sm" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Issue Number</label>
            <input type="number" className="border p-2 w-full rounded text-sm" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Year</label>
            <input type="number" className="border p-2 w-full rounded text-sm" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Published</label>
            <select className="border p-2 w-full rounded text-sm">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateIssuePage;
