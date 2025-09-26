"use client";
import React, { useState } from "react";
import ContactDetails from "@/components/ContactDetails";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, UI only
    console.log("Inquiry submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center p-6">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-black font-bold mb-6 text-center md:text-left">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column: details + map */}
          <div className="space-y-6">
            <ContactDetails />

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-black font-semibold mb-2">Our Location</h2>
              <div className="w-full h-96 rounded overflow-hidden border">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.187807154071!2d80.9346005!3d26.8466931"
                  allowFullScreen
                  loading="lazy"
                  title="Office location"
                />
              </div>
            </div>
          </div>

          {/* Right column: inquiry form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-black font-semibold mb-4">Send an Inquiry</h2>

            {sent && (
              <div className="mb-4 text-green-800 bg-green-100 px-3 py-2 rounded">
                Your message was sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={6}
                required
              />

              <div className="flex flex-wrap gap-2">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                >
                  Send
                </button>
                <button
                  type="button"
                  onClick={() => setForm({ name: "", email: "", message: "" })}
                  className="px-4 py-2 border rounded hover:bg-gray-50 transition"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
