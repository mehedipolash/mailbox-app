'use client';
import { useState } from 'react';
import { mockApi } from '@/lib/mockApi';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mockApi.forgotPassword(email);
      setSent(true);
    } catch {
      setError('User not found');
    }
  };

  if (sent) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-black">
        <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 text-center text-white transition-all duration-300 hover:border-yellow-400">
          <p className="text-gray-200">Reset link sent to <span className="text-yellow-400">{email}</span></p>
          <Link href="/auth/login" className="text-yellow-400 hover:text-yellow-300 mt-4 inline-block transition">
            Back to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black">
      <form onSubmit={handleSubmit} className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 w-full max-w-md space-y-4 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)]">
        <h2 className="text-2xl font-bold text-center">
          <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            Reset password
          </span>
        </h2>
        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        <input
          type="email"
          placeholder="Your email"
          className="w-full p-3 rounded-lg bg-black/60 border border-yellow-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn-inferno w-full">
          Send reset link
        </button>
        <div className="text-center text-sm text-gray-400">
          <Link href="/auth/login" className="hover:text-yellow-400 transition">
            Back to login
          </Link>
        </div>
      </form>
    </div>
  );
}