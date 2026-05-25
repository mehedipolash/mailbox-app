'use client';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function ProfilePage() {
  const { user, updateUser } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [message, setMessage] = useState('');

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUser({ name, email });
    setMessage('Profile updated');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold">
        <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
          Profile settings
        </span>
      </h1>
      {message && <p className="text-yellow-400 mt-2">{message}</p>}
      <form onSubmit={handleSave} className="mt-6 space-y-4">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-3 bg-black/60 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
          placeholder="Full name"
        />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-3 bg-black/60 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
          placeholder="Email"
        />
        <button type="submit" className="btn-inferno">
          Save changes
        </button>
      </form>
    </div>
  );
}