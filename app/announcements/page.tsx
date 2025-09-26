// app/announcements/page.tsx
import AnnouncementsDetails from "@/components/AnnouncementsDetails";

export default function AnnouncementsPage() {
  return (
    <main className=" bg-white text-gray-800  mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Announcements</h1>

      <section className="bg-white p-6 rounded shadow-sm">
        {/* Reuse dropdown details */}
        <AnnouncementsDetails />

        {/* Extra: example announcements list */}
        <div className="mt-6 space-y-4">
          <article className="border-b pb-3">
            <h4 className="font-semibold text-sm">📢 Call for Papers (Vol. 3, 2025)</h4>
            <p className="text-xs text-gray-600">
              Submissions are open until <strong>30th Nov 2025</strong>.
            </p>
          </article>

          <article className="border-b pb-3">
            <h4 className="font-semibold text-sm">⚡ New Peer Review Policy</h4>
            <p className="text-xs text-gray-600">
              Starting 2025, we adopt a <strong>double-blind review model</strong>.
            </p>
          </article>

          <article>
            <h4 className="font-semibold text-sm">🎓 Upcoming Workshop</h4>
            <p className="text-xs text-gray-600">
              Join our webinar on <strong>Research Ethics</strong> scheduled for
              <strong> Dec 15, 2025</strong>.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
