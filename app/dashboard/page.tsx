'use client';
import { useAuth } from '../context/AuthContext';
import { mockApi } from '@/lib/mockApi';
import { useEffect, useState } from 'react';

export default function DashboardHome() {
  const { user } = useAuth();
  const [emailCount, setEmailCount] = useState(0);

  useEffect(() => {
    mockApi.getEmails().then(emails => setEmailCount(emails.length));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-white tracking-tight">
        Welcome back,{' '}
        <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
          {user?.name}
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
       
        <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)]">
          <div className="text-3xl mb-2">📧</div>
          <div className="text-2xl font-bold text-white">{emailCount}</div>
          <div className="text-gray-400 text-sm">emails in inbox</div>
        </div>

        
        <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)]">
          <div className="text-3xl mb-2">⭐</div>
          <div className="text-2xl font-bold text-white capitalize">{user?.plan}</div>
          <div className="text-gray-400 text-sm">current plan</div>
        </div>

     
        <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)]">
          <div className="text-3xl mb-2">📅</div>
          <div className="text-2xl font-bold text-white">Today</div>
          <div className="text-gray-400 text-sm">last login</div>
        </div>
      </div>
    </div>
  );
}