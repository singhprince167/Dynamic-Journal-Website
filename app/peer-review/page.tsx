// app/peer-review/page.tsx
import PeerReviewDetails from "@/components/PeerReviewDetails";

export default function PeerReviewPage() {
  return (
    <main className="bg-white text-gray-800  mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Peer Review & Policies</h1>

      <section className="bg-white p-6 rounded shadow-sm">
        {/* Use same dropdown details here */}
        <PeerReviewDetails />

        {/* Extra section: add policy documents or downloads */}
        <div className="mt-6">
          <h4 className="font-semibold text-sm mb-2">Policy Documents</h4>
          <ul className="list-disc pl-5 text-xs text-gray-600">
            <li>
              <a href="/policies/review-process.pdf" className="text-indigo-600 hover:underline">
                Review Process PDF
              </a>
            </li>
            <li>
              <a href="/policies/copyright.pdf" className="text-indigo-600 hover:underline">
                Copyright & Licensing Policy
              </a>
            </li>
            <li>
              <a href="/policies/retraction.pdf" className="text-indigo-600 hover:underline">
                Retraction Policy
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
