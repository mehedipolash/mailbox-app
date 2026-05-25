'use client';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { mockApi } from '@/lib/mockApi';

export default function DashboardHome() {
  const { user } = useAuth();
  const [emailCount, setEmailCount] = useState(0);

  useEffect(() => {
    mockApi.getEmails().then(emails => setEmailCount(emails.length));
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold">Welcome back, {user?.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-slate-800/50 p-6 rounded-xl">📧 {emailCount} emails in inbox</div>
        <div className="bg-slate-800/50 p-6 rounded-xl">⭐ {user?.plan} plan active</div>
        <div className="bg-slate-800/50 p-6 rounded-xl">📅 Last login today</div>
      </div>
    </div>
  );
}