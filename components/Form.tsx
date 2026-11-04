"use client";
import { useState, type FormEvent } from "react";
import axios from "axios";
import Link from "next/link";
import { Toaster, toast } from "sonner";
import { contactData } from "@/utils/contactData";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please complete all fields.");
      return;
    }
    setSending(true);
    try {
      const response = await axios.post("/api/send-email", { name, email, message });
      if (response.status === 200) {
        toast.success("Your message has been sent. Thank you.");
        setName(""); setEmail(""); setMessage("");
      } else {
        toast.error("Your message could not be sent. Please try again.");
      }
    } catch {
      toast.error("Your message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-xs font-semibold text-[#35463a]">Your name
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="mt-2 w-full rounded-xl border border-[#dfe7df] bg-[#fbfcfa] px-4 py-3 text-sm text-[#17231c] outline-none transition focus:border-[#176b43]" />
        </label>
        <label className="block text-xs font-semibold text-[#35463a]">Email address
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-[#dfe7df] bg-[#fbfcfa] px-4 py-3 text-sm text-[#17231c] outline-none transition focus:border-[#176b43]" />
        </label>
      </div>
      <label className="block text-xs font-semibold text-[#35463a]">How can I help?
        <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me a little about your project, opportunity or idea..." className="mt-2 w-full resize-y rounded-xl border border-[#dfe7df] bg-[#fbfcfa] px-4 py-3 text-sm text-[#17231c] outline-none transition focus:border-[#176b43]" />
      </label>
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={sending} className="green-button disabled:cursor-wait disabled:opacity-60">{sending ? "Sending..." : "Send message"} <span>↗</span></button>
        <p className="text-xs text-[#78837b]">Or reach me directly on <Link className="font-semibold text-[#176b43]" href={`https://wa.me/${contactData.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer">WhatsApp ↗</Link></p>
      </div>
      <Toaster position="top-right" />
    </form>
  );
};
