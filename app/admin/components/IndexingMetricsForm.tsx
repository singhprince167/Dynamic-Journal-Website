"use client";
import { useState } from "react";

const IndexingMetricsForm: React.FC = () => {
  const [indexName, setIndexName] = useState("");
  const [impactFactor, setImpactFactor] = useState("");
  const [hIndex, setHIndex] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");
  const [logo, setLogo] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ indexName, impactFactor, hIndex, lastUpdated, logo });
  };

  return (
    <div className="w-full  p-4 flex justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg ">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          Add / Update Indexing & Metrics
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Index Name</label>
            <input
              type="text"
              value={indexName}
              onChange={(e) => setIndexName(e.target.value)}
              placeholder="Enter index name"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Impact Factor</label>
            <input
              type="text"
              value={impactFactor}
              onChange={(e) => setImpactFactor(e.target.value)}
              placeholder="Enter impact factor"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">H-Index</label>
            <input
              type="text"
              value={hIndex}
              onChange={(e) => setHIndex(e.target.value)}
              placeholder="Enter H-Index"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Last Updated</label>
            <input
              type="date"
              value={lastUpdated}
              onChange={(e) => setLastUpdated(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Logo</label>
            <input
              type="file"
              onChange={(e) => setLogo(e.target.files ? e.target.files[0] : null)}
              className="mt-1 block w-full text-gray-700"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
            >
              Save
            </button>
            <button
              type="button"
              className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition"
              onClick={() => {
                setIndexName("");
                setImpactFactor("");
                setHIndex("");
                setLastUpdated("");
                setLogo(null);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IndexingMetricsForm;
