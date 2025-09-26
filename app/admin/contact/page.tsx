"use client";
import React, { useState } from "react";

export default function AdminContactSettings() {
  // Dummy initial values — replace by API later
  const [email, setEmail] = useState("journal.support@example.com");
  const [phone, setPhone] = useState("+91-9876543210");
  const [address, setAddress] = useState("Journal Office, Lucknow, India");
  const [mapEmbedUrl, setMapEmbedUrl] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.187807154071!2d80.9346005!3d26.8466931"
  );
  const [notificationEmails, setNotificationEmails] = useState("admin@example.com,editor@example.com");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // UI-only: replace with API call to persist settings
    console.log({ email, phone, address, mapEmbedUrl, notificationEmails });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact Settings</h1>

      {saved && <div className="mb-3 text-sm text-green-700 bg-green-50 p-2 rounded">Settings saved (UI only)</div>}

      <div className="bg-white p-4 rounded shadow-sm space-y-4 max-w-2xl">
        <div>
          <label className="block text-xs font-semibold mb-1">Support Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1">Phone</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1">Address</label>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border px-3 py-2 rounded" rows={2} />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1">Map Embed URL (iframe src)</label>
          <input value={mapEmbedUrl} onChange={(e) => setMapEmbedUrl(e.target.value)} className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1">Notification Emails (comma separated)</label>
          <textarea value={notificationEmails} onChange={(e) => setNotificationEmails(e.target.value)} className="w-full border px-3 py-2 rounded" rows={2} />
        </div>

        <div className="flex items-center space-x-2">
          <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Save</button>
          <button onClick={() => {
            setEmail("journal.support@example.com");
            setPhone("+91-9876543210");
            setAddress("Journal Office, Lucknow, India");
            setMapEmbedUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.187807154071!2d80.9346005!3d26.8466931");
            setNotificationEmails("admin@example.com,editor@example.com");
          }} className="px-3 py-2 border rounded">Reset</button>
        </div>
      </div>

      {/* Preview of map & contact (optional) */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Preview</h2>
        <div className="bg-white p-4 rounded shadow-sm space-y-4 max-w-2xl">
          <div>
            <strong>Email:</strong> {email}
          </div>
          <div>
            <strong>Phone:</strong> {phone}
          </div>
          <div>
            <strong>Address:</strong> {address}
          </div>
          <div className="w-full h-64 rounded overflow-hidden border">
            <iframe className="w-full h-full border-0" src={mapEmbedUrl} loading="lazy" title="Map preview" />
          </div>
        </div>
      </div>
    </div>
  );
}
