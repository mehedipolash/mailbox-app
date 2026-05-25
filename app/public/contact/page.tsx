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
    <div className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            Get in touch
          </span>
        </h1>
        <p className="text-center text-gray-300 mb-12">We’ll reply within 24 hours.</p>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit} 
            className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6 space-y-4 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)]"
          >
            {sent && <p className="text-yellow-400 text-center">Message sent! (demo)</p>}
            <input 
              type="text" 
              placeholder="Your name" 
              required 
              className="w-full p-3 bg-black/60 rounded-lg border border-yellow-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
            />
            <input 
              type="email" 
              placeholder="Email" 
              required 
              className="w-full p-3 bg-black/60 rounded-lg border border-yellow-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
            />
            <textarea 
              rows={5} 
              placeholder="Message" 
              required 
              className="w-full p-3 bg-black/60 rounded-lg border border-yellow-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
            ></textarea>
            <button 
              type="submit" 
              className="btn-inferno w-full"
            >
              Send message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-gray-300">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-black/30 border border-yellow-500/20">
              <FiMail className="text-yellow-400 text-2xl" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-white">support@mailnest.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-black/30 border border-yellow-500/20">
              <FiPhone className="text-yellow-400 text-2xl" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-black/30 border border-yellow-500/20">
              <FiMapPin className="text-yellow-400 text-2xl" />
              <div>
                <p className="text-sm text-gray-500">Office</p>
                <p className="text-white">123 Innovation Drive, SF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}