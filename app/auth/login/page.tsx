'use client';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/dashboard/mail');
    } catch {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-white text-center">Welcome back</h2>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-slate-900 text-white"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-slate-900 text-white"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-teal-500 py-2 rounded-lg font-semibold text-white">
          Login
        </button>
        <div className="text-center text-sm text-gray-400">
          <Link href="/auth/forgot-password">Forgot password?</Link> · <Link href="/auth/signup">Sign up</Link>
        </div>
        <div className="text-xs text-center text-gray-500">Demo: any email + password123</div>
      </form>
    </div>
  );
}