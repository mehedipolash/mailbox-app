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
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        <div className="bg-slate-800/50 p-8 rounded-2xl text-center text-white">
          <p>Reset link sent to {email}</p>
          <Link href="/auth/login" className="text-teal-400 mt-4 inline-block">Back to login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-white text-center">Reset password</h2>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <input
          type="email"
          placeholder="Your email"
          className="w-full p-3 rounded-lg bg-slate-900 text-white"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-teal-500 py-2 rounded-lg font-semibold text-white">
          Send reset link
        </button>
        <div className="text-center text-sm text-gray-400">
          <Link href="/auth/login">Back to login</Link>
        </div>
      </form>
    </div>
  );
}