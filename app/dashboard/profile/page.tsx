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
    <div className="max-w-2xl text-white">
      <h1 className="text-2xl font-bold">Profile settings</h1>
      {message && <p className="text-green-400 mt-2">{message}</p>}
      <form onSubmit={handleSave} className="mt-6 space-y-4">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-3 bg-slate-800 rounded-lg text-white"
          placeholder="Full name"
        />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-3 bg-slate-800 rounded-lg text-white"
          placeholder="Email"
        />
        <button type="submit" className="bg-teal-500 px-6 py-2 rounded-lg">
          Save changes
        </button>
      </form>
    </div>
  );
}