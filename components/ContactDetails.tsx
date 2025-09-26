"use client";
import React from "react";

interface ContactDetailsProps {
  email?: string;
  phone?: string;
  address?: string;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  email = "journal.support@example.com",
  phone = "+91-9876543210",
  address = "Journal Office, Lucknow, India",
}) => {
  return (
    <div className="text-sm text-gray-700 space-y-3 bg-white p-4 rounded shadow-sm">
      <h3 className="font-bold text-indigo-700 text-lg mb-1">Contact</h3>
      <p className="text-sm">For inquiries regarding submissions, editorial policies, or general questions, please reach out to us:</p>
      <ul className="space-y-1 mt-2">
        <li><span className="font-semibold">Email:</span> {email}</li>
        <li><span className="font-semibold">Phone:</span> {phone}</li>
        <li><span className="font-semibold">Address:</span> {address}</li>
      </ul>
    </div>
  );
};

export default ContactDetails;
