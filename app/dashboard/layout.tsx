'use client';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.push('/auth/login');
  }, [user, loading, router]);

  if (loading) return <div className="flex justify-center items-center h-screen text-yellow-400">Initializing secure link...</div>;
  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-black">
      <DashboardSidebar user={user} />
      
      <main className="flex-1 p-6 overflow-auto">
        <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-xl min-h-full p-6 transition-all duration-300 hover:border-yellow-400">
          {children}
        </div>
      </main>
    </div>
  );
}