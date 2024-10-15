"use client";

import React, { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const Email = () => {
  const session = useSession();

  const [recipients, setRecipients] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("/api/send-email", {
        session,
        recipients: recipients.split(",").map((email) => email.trim()),
        subject,
        message,
      });
      alert("Email sent successfully");
    } catch (error) {
      alert("Failed to send email");
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="mt-8 text-center text-3xl font-bold">
          Cold Email to Multiple Companies at Once
        </h1>
        <div className="mt-14 flex flex-col items-center">
          <input
            className="mt-5 px-4 py-3 w-96 text-black border-2 border-gray-300 rounded-md"
            type="text"
            placeholder="To (Recipient Emails, comma-separated)"
            value={recipients}
            onChange={(e) => setRecipients(e.target.value)}
            required
          />
          <input
            className="mt-5 px-4 py-3 w-96 text-black border-2 border-gray-300 rounded-md"
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            className="mt-5 px-4 py-3 w-96 text-black border-2 border-gray-300 rounded-md"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="mt-5 px-4 py-3 font-semibold text-black bg-blue-500 rounded-md"
          >
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default Email;
