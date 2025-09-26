// app/indexing/page.tsx
import IndexingDetails from "@/components/IndexingDetails";

export default function IndexingPage() {
  return (
    <main className="  bg-white text-gray-800  mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Indexing & Metrics</h1>

      <section className="bg-white p-6 rounded shadow-sm">
        {/* Reuse dropdown details */}
        <IndexingDetails />

        {/* Extra: table or list of databases */}
        <div className="mt-6">
          <h4 className="font-semibold text-sm mb-2">Indexed In</h4>
          <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1">
            <li>Scopus</li>
            <li>DOAJ (Directory of Open Access Journals)</li>
            <li>Google Scholar</li>
            <li>PubMed Central</li>
            <li>CrossRef</li>
          </ul>

          <h4 className="font-semibold text-sm mt-6 mb-2">Impact Metrics</h4>
          <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1">
            <li>Impact Factor: 2.45 (2025)</li>
            <li>Citations: 1,230+</li>
            <li>h-index: 15</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
