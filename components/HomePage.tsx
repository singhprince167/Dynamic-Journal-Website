"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Announcement {
  text: string;
  isNew?: boolean;
}

const announcements: Announcement[] = [
  { text: "📢 Call for Papers: Submit before Oct 15, 2025", isNew: true },
  { text: "✍️ Special Issue on AI in Healthcare – Submit by Nov 30, 2025" },
  { text: "🎉 New editorial board members announced", isNew: true },
  { text: "🔔 Webinar on Research Writing – Dec 2025" },
];

const indexingMetrics: string[] = [
  "Indexed in Scopus",
  "ISSN: 1234-5678",
  "Impact Factor: 2.3",
];

const HomePage: React.FC = () => {
  const [visibleAnnouncements, setVisibleAnnouncements] = useState<Announcement[]>(announcements);

  // Marquee scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleAnnouncements(prev => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white text-gray-800 px-4 py-12 min-h-screen">
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left Column: Announcements + Indexing */}
        <div className="space-y-8 md:col-span-1">
          {/* Announcements Box */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
            <h2 className="text-lg font-semibold mb-3 flex justify-between items-center">
              Announcements
            </h2>

            <div className="relative h-24 overflow-hidden">
              <div className="absolute top-0 animate-marquee space-y-2">
                {visibleAnnouncements.map((item, idx) => (
                  <div key={idx} className="flex items-center text-gray-700 text-sm">
                    {item.text}
                    {item.isNew && (
                      <span className="ml-2 bg-red-500 text-white text-xs px-1 rounded">NEW</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Indexing & Metrics */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
            <h2 className="text-lg font-semibold mb-2">Indexing & Metrics</h2>
            <ul className="text-gray-600 text-sm space-y-1">
              {indexingMetrics.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center Column: Hero */}
        <div className="md:col-span-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl font-bold mb-4">Welcome to MyJournal</h1>
          <p className="text-gray-600 mb-6 max-w-xl">
            MyJournal is an academic journal platform providing the latest issues,
            recent articles, and calls for papers for authors and readers.
          </p>
          <Image
            src="/images/hand.jpg"
            alt="Journal Banner"
            width={700}
            height={300}
            className="rounded shadow-sm mx-auto md:mx-0 h-[300px] w-[600px]"
          />
        </div>

        {/* Right Column: Latest Issue */}
        <div className="md:col-span-1">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <h2 className="text-2xl font-semibold mb-4">Latest Issue</h2>
            <Image
              src="/images/music.jpg"
              alt="Latest Issue Cover"
              width={300}
              height={400}
              className="mx-auto rounded shadow-sm mb-4"
            />
            <h3 className="text-xl font-bold">Volume 12, Issue 3 (2025)</h3>
            <p className="text-gray-600 mb-4">
              Latest research in computer science, data analytics, and emerging technologies.
            </p>
            <a href="/issues/latest" className="text-blue-600 hover:underline">
              Read Latest Issue →
            </a>
          </div>
        </div>

      </section>
    </main>
  );
};

export default HomePage;
