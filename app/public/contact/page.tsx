'use client';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-4">Get in touch</h1>
        <p className="text-center text-gray-300 mb-12">We’ll reply within 24 hours.</p>
        <div className="grid md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="bg-slate-800/40 backdrop-blur rounded-2xl p-6 space-y-4">
            {sent && <p className="text-green-400">Message sent! (demo)</p>}
            <input type="text" placeholder="Your name" required className="w-full p-3 bg-slate-900 rounded-lg border border-teal-500/30 text-white" />
            <input type="email" placeholder="Email" required className="w-full p-3 bg-slate-900 rounded-lg text-white" />
            <textarea rows={5} placeholder="Message" required className="w-full p-3 bg-slate-900 rounded-lg text-white"></textarea>
            <button type="submit" className="bg-teal-500 px-6 py-2 rounded-lg text-white">Send</button>
          </form>
          <div className="space-y-4 text-gray-300">
            <div className="flex gap-3"><FiMail className="text-teal-400" /> support@mailnest.com</div>
            <div className="flex gap-3"><FiPhone className="text-teal-400" /> +1 (555) 123-4567</div>
            <div className="flex gap-3"><FiMapPin className="text-teal-400" /> 123 Innovation Drive, SF</div>
          </div>
        </div>
      </div>
    </div>
  );
}