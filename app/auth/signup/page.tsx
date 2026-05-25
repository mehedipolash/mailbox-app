'use client';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(name, email, password);
      router.push('/dashboard/mail');
    } catch {
      setError('Email already exists');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black">
      <form onSubmit={handleSubmit} className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 w-full max-w-md space-y-4 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)]">
        <h2 className="text-2xl font-bold text-center">
          <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            Create account
          </span>
        </h2>
        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        <input
          type="text"
          placeholder="Full name"
          className="w-full p-3 rounded-lg bg-black/60 border border-yellow-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-black/60 border border-yellow-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-black/60 border border-yellow-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn-inferno w-full">
          Sign up
        </button>
        <div className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link href="/auth/login" className="hover:text-yellow-400 transition">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}